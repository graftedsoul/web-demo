import { navbarData } from '@/data/navbar';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const DesktopNavbar = () => {
  const pathname = usePathname();

  return (
    <nav
      className="navbar px-6 px-lg-3 px-xl-8 container-lg"
      id="global_navbar"
      data-bs-theme="dark"
    >
      <Link className="navbar-brand" href={navbarData.logo.logoUrl}>
        <Image
          src={navbarData.logo.logoImageUrl}
          alt={navbarData.logo.logoImageAlt}
          width={90}
          height={35}
          priority={true}
        />
      </Link>

      {/* nav content */}
      <div className="nav_content d-flex gap-5 align-items-center">
        {/* navigation links list */}
        <ul className="text_xsmall navbar-nav d-flex flex-row gap-4">
          {navbarData.links.map((link, index) => (
            <li
              className={`nav-item ${link.dropdownItems.length > 0 ? ' dropdown' : ''}`}
              key={'navItem_' + index}
              id={'navItem_' + index}
            >
              <Link
                className={`nav-link ${link.dropdownItems.length > 0 ? ' dropdown-toggle' : ''} ${link.linkUrl === pathname && ' active text_600 '}`}
                href={link.dropdownItems.length > 0 ? '#' : link.linkUrl}
                {...(link.dropdownItems.length > 0
                  ? {
                      role: 'button',
                      id: 'dropdownToggle_' + index,
                      'data-bs-toggle': 'dropdown',
                      'aria-expanded': 'false',
                    }
                  : {})}
              >
                {link.linkText}
              </Link>

              {/* dropdown links list */}
              {link.dropdownItems.length > 0 && (
                <ul
                  className="text_small dropdown-menu bg-white position-absolute m-0 border-0 rounded-0"
                  style={{ top: 'calc(100% + 0.7rem + 1px)', left: '0' }}
                  data-bs-theme="light"
                >
                  {link.dropdownItems.map((dropdown, index) => (
                    <li
                      key={'dropdownListItem_' + index}
                      id={'dropdownListItem_' + index}
                    >
                      <Link
                        id={'dropdownItem_' + index}
                        href={dropdown.dropdownUrl}
                        className="dropdown-item px-3 py-2"
                      >
                        {dropdown.dropdownText}
                      </Link>
                    </li>
                  ))}
                </ul>
              )}
            </li>
          ))}
        </ul>

        {/* buttons list */}
        <div className="buttons_container">
          {navbarData.buttons.map((button, index) => (
            <Link
              className="btn btn-primary button_xsmall"
              href={button.buttonUrl}
              key={'navbarCTA_' + index}
              id={'navbarCTA_' + index}
            >
              {button.buttonText}
            </Link>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default DesktopNavbar;
