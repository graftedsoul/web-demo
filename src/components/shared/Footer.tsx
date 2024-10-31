// @ts-nocheck

'use client';

import { footerData } from '@/data/footer.js';
import Link from 'next/link';
import Image from 'next/image';
import dynamic from 'next/dynamic';

const icons = {
  MailIcon: dynamic(() => import('../icons/MailIcon.tsx')),
  PhoneIcon: dynamic(() => import('../icons/PhoneIcon.tsx')),
  GlobalIcon: dynamic(() => import('../icons/GlobalIcon.tsx')),
  InstagramIcon: dynamic(() => import('../icons/InstagramIcon.tsx')),
  YouTubeIcon: dynamic(() => import('../icons/YouTubeIcon.tsx')),
  TwitterIcon: dynamic(() => import('../icons/TwitterIcon.tsx')),
  TumblrIcon: dynamic(() => import('../icons/TumblrIcon.tsx')),
  GitHubIcon: dynamic(() => import('../icons/GitHubIcon.tsx')),
};

const Footer = () => {
  const getIcon = (icon: string, size: string) => {
    const IconComponent = icons[icon + 'Icon'];
    return <IconComponent colour='pink' size={size} false />;
  };

  return (
    <footer id='global_footer' className='bg-black text-white py-5 mt-8'>
      <h3 className='visually-hidden'>Footer</h3>

      <div className='px-3 px-md-6 px-lg-3 px-xl-8'>
        <section className='footer_section_top d-flex flex-wrap row-gap-5 justify-content-lg-between'>
          {footerData.topSections.map((section, index) => (
            <section
              className={`
                footer_section
                col-6 col-lg-2
                ${index === 0 && ' col-10 col-lg-4'}
                ${index === footerData.topSections.length - 1 && ' col-10 col-lg-3'}
              `}
              key={'footerSection_' + index}
              id={'footerSection_' + index}
            >
              <h3
                className={`elevated_header ${section.logo && 'visually-hidden'}`}
              >
                {section.title}
              </h3>

              {section.logo && (
                <Link href={section.logo.logoUrl}>
                  <Image
                    src={section.logo.logoImageUrl}
                    alt={section.logo.logoImageAlt}
                    width={256}
                    height={40}
                    priority={true}
                    className='mb-3'
                  />
                </Link>
              )}

              {section.text && <p>{section.text}</p>}

              <ul className={`footer_nav_top nav d-flex flex-column gap-1`}>
                <style jsx>{`
                  .footer_nav_top:has(.nav-item i.no_text) {
                    flex-direction: row !important;
                  }
                `}</style>

                {section.links.map((item, index) => (
                  <li
                    id={'footerTopNavListItem_' + index}
                    key={'footerTopNavListItem_' + index}
                    className='nav-item'
                  >
                    <Link
                      id={'footerTopNavLink_' + index}
                      href={item.linkUrl}
                      className='text_500 link-light link-opacity-75-hover d-flex gap-2 align-items-center'
                    >
                      {item.linkIcon &&
                        (item.linkText
                          ? getIcon(item.linkIcon, 'xsmall')
                          : getIcon(item.linkIcon, 'small no_text'))}

                      {item.linkText && <span>{item.linkText}</span>}
                    </Link>
                  </li>
                ))}
              </ul>
            </section>
          ))}
        </section>

        <section className='footer_section_bottom border-top mt-3 pt-3 d-flex flex-column flex-sm-row justify-content-sm-between'>
          <span className='text_small col-12 col-sm-6 mb-3 mb-sm-0'>
            {footerData.bottomSection.copyright}
          </span>

          <ul className='footer_nav_bottom nav text_small text-start text-sm-end d-flex flex-column'>
            {footerData.bottomSection.links.map((item, index) => (
              <li
                id={'footerBottomNavListItem_' + index}
                key={'footerBottomNavListItem_' + index}
              >
                <Link
                  id={'footerBottomNavLink_' + index}
                  className='link-light link-opacity-75-hover p-0'
                  href={item.linkUrl}
                >
                  {item.linkText}
                </Link>
              </li>
            ))}
          </ul>
        </section>
      </div>
    </footer>
  );
};

export default Footer;
