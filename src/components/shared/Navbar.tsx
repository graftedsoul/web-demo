'use client';

import { navbarData } from '@/data/navbar.js';
import MobileNavbar from './MobileNavbar';
import DesktopNavbar from './DesktopNavbar';

const Navbar = () => {
  return (
    <header
      id='global_navbar_header'
      className='sticky-top bg-black text-white'
    >
      <h1 className='visually-hidden'>{navbarData.title}</h1>

      <div className='d-block d-xl-none'>
        <MobileNavbar />
      </div>

      <div className='d-none d-xl-block'>
        <DesktopNavbar />
      </div>
    </header>
  );
};

export default Navbar;
