import { navbarData } from '@/data/navbar.js';
import gsap from 'gsap';
import Image from 'next/image';
import Link from 'next/link';
import { MouseEvent, useEffect } from 'react';
import { ArrowLeftIcon, ArrowRightIcon, CloseIcon, MoreIcon } from '../icons';
import { usePathname } from 'next/navigation';

const MobileNavbar = () => {
  const pathname = usePathname();

  useEffect(() => {
    document.querySelectorAll('#global_navbar .submenu').forEach((submenu) => {
      gsap.to(submenu, {
        display: 'none',
        xPercent: 120,
      });
    });

    document
      .getElementById('global_navbar_offcanvas')
      ?.addEventListener('hidden.bs.offcanvas', () => {
        document
          .querySelectorAll('#global_navbar .submenu.show')
          .forEach((submenu) => {
            disposeSubmenu(submenu as HTMLElement);
          });
      });
  }, []);

  function showSubmenu(e: MouseEvent) {
    e.preventDefault();

    document
      .querySelectorAll('#global_navbar .submenu.show')
      .forEach((submenu) => {
        disposeSubmenu(submenu as HTMLElement);
      });

    const submenuToggler = e.currentTarget as HTMLElement;
    const submenu = submenuToggler.nextSibling as HTMLElement;
    const mainNav = document.getElementById('global_navbar_main_nav');

    if (submenuToggler.id.slice(-1) === submenu.id.slice(-1)) {
      gsap.to(mainNav, {
        xPercent: -100,
        ease: 'power3.out',
      });
      gsap.to(submenu, {
        display: 'block',
        xPercent: 100,
        ease: 'power3.out',
      });

      submenu.classList.add('show');
    }
  }

  function hideSubmenu(e: MouseEvent) {
    e.preventDefault();

    const submenuBacklink = e.currentTarget as HTMLElement;
    const submenu = (
      (submenuBacklink.parentElement as HTMLElement)
        .parentElement as HTMLElement
    ).parentElement as HTMLElement;
    const mainNav = document.getElementById('global_navbar_main_nav');

    gsap
      .timeline({ defaults: { ease: 'power3.out' } })
      .to(mainNav, {
        xPercent: 0,
      })
      .to(
        submenu,
        {
          xPercent: 120,
          display: 'none',
        },
        '<'
      )
      .to(submenu, {
        display: 'none',
      });

    submenu.classList.remove('show');
  }

  function disposeSubmenu(submenu: HTMLElement) {
    const mainNav = document.getElementById('global_navbar_main_nav');

    gsap.to(mainNav, {
      xPercent: 0,
    });

    gsap.to(submenu, {
      display: 'none',
      xPercent: 120,
    });

    submenu.classList.remove('show');
  }

  return (
    <nav
      className='navbar container-sm px-3 px-md-6 px-xl-8'
      id='global_navbar'
    >
      <Link className='navbar-brand' href={navbarData.logo.logoUrl}>
        <Image
          src={navbarData.logo.logoImageUrl}
          alt={navbarData.logo.logoImageAlt}
          width={128}
          height={20}
          priority={true}
        />
      </Link>

      <button
        className='navbar-toggler link-opacity-75-hover'
        type='button'
        data-bs-toggle='offcanvas'
        data-bs-target='#global_navbar_offcanvas'
        aria-controls='#lobal_navbar_offcanvas'
      >
        <MoreIcon colour='white' size='small' />
      </button>

      <div
        className='offcanvas offcanvas-start bg-black border-0 vw-100 vh-100'
        id='global_navbar_offcanvas'
        data-bs-scroll='false'
        data-bs-backdrop='false'
        data-bs-theme='dark'
        tabIndex={-1}
      >
        <div className='offcanvas-header justify-content-end'>
          <h2 className='offcanvas-title visually-hidden'>Navigasyon</h2>
          <button
            type='button'
            className='p-0 border-0 bg-black bg-opacity-10 link-opacity-75-hover'
            data-bs-dismiss='offcanvas'
            aria-label='Close'
          >
            <CloseIcon colour='white' size='small' />
          </button>
        </div>

        <div className='offcanvas-body position-relative'>
          <div className='main_nav' id='global_navbar_main_nav'>
            {/* navigation links list */}
            <ul className='navbar-nav text_large text_600'>
              {navbarData.links.map((link, index) => (
                <li
                  className={`nav-item ${link.dropdownItems.length > 0 ? ' submenu_parent' : ''}`}
                  key={'navItem_' + index}
                  id={'navItem_' + index}
                >
                  <Link
                    className={`text_600 nav-link link-light link-opacity-75-hover ${link.dropdownItems.length > 0 ? ' submenu_toggle ' : ''} ${link.linkUrl === pathname && ' active '}`}
                    href={link.dropdownItems.length > 0 ? '#' : link.linkUrl}
                    {...(link.dropdownItems.length > 0
                      ? {
                          role: 'button',
                          id: 'submenuToggle_' + index,
                          onClick: showSubmenu,
                        }
                      : {})}
                  >
                    {link.linkText}

                    {link.dropdownItems.length > 0 && (
                      <div className='d-inline float-end me-3'>
                        <ArrowRightIcon colour='white' size='small' />
                      </div>
                    )}
                  </Link>

                  {/* dropdown links list */}
                  {link.dropdownItems.length > 0 && (
                    <div
                      className='submenu p-0 bg-black position-absolute top-0 start-0 w-100 h-100 z-9000'
                      id={'submenu_' + index}
                    >
                      <ul
                        className='submenu_nav navbar-nav p-0'
                        id={'submenuNav_' + index}
                      >
                        <li>
                          <Link
                            href='#'
                            role='button'
                            className='submenu_backlink text_600 header_s nav-link link-light'
                            onClick={hideSubmenu}
                          >
                            <div className='d-inline-block ms-n2 me-3 align-top'>
                              <ArrowLeftIcon colour='white' size='small' />
                            </div>
                            {link.linkText}
                          </Link>
                        </li>
                        <hr />
                        {link.dropdownItems.map((dropdown, index) => (
                          <li
                            key={'submenuListItem_' + index}
                            id={'submenuListItem_' + index}
                          >
                            <Link
                              href={dropdown.dropdownUrl}
                              className={`submenu_link text_600 nav-link link-light link-opacity-75-hover ${link.linkUrl === pathname && ' active '}`}
                            >
                              {dropdown.dropdownText}
                            </Link>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                </li>
              ))}
            </ul>

            {/* buttons list */}
            <div className='buttons_container d-flex justify-content-center gap-2 mt-8'>
              {navbarData.buttons.map((button, index) => (
                <Link
                  className={`btn ${'btn-' + button.buttonType} text_600`}
                  href={button.buttonUrl}
                  key={'navbarCTA_' + index}
                  id={'navbarCTA_' + index}
                >
                  {button.buttonText}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default MobileNavbar;
