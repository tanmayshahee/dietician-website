import React, { useState } from 'react';
import Link from 'next/link';
export default function SiteHeader() {
  const [showMobileMenu, toggleMobileMenu] = useState(false);
  const toggleSideMenu = () => {
    toggleMobileMenu(!showMobileMenu);
    console.log('toggle menu');
  };
  return (
    <header className='site-header'>
      <div className='container'>
        <Link href='/'>
          <a id='branding' className='pull-left'>
            <i className='icon-cupcake logo'></i>
            <h1 className='site-title'>Kajol Jain</h1>
          </a>
        </Link>
        <div className='main-navigation pull-right'>
          <button
            type='button'
            className='menu-toggle'
            onClick={toggleSideMenu}
          >
            <i className='fa fa-bars'></i>
          </button>
          <ul className='menu'>
            <li className='menu-item'>
              <Link href='/about'>
                <a>About me</a>
              </Link>
            </li>
            <li className='menu-item'>
              <Link href='/offer'>
                <a>My Offer</a>
              </Link>
            </li>
            <li className='menu-item'>
              <Link href='/recipes'>
                <a>Recipes</a>
              </Link>
            </li>
            <li className='menu-item'>
              <Link href='/contact'>
                <a>Contact</a>
              </Link>
            </li>
          </ul>
        </div>

        <div
          className={`mobile-navigation ${showMobileMenu ? 'show-menu' : ''}`}
        >
          <ul className='menu'>
            <li className='menu-item'>
              <Link href='/about'>
                <a>About me</a>
              </Link>
            </li>
            <li className='menu-item'>
              <Link href='/offer'>
                <a>My Offer</a>
              </Link>
            </li>
            <li className='menu-item'>
              <Link href='/recipes'>
                <a>Recipes</a>
              </Link>
            </li>
            <li className='menu-item'>
              <Link href='/contact'>
                <a>Contact</a>
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </header>
  );
}
