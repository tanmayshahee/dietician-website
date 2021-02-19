import React, { useState } from 'react';
import Link from 'next/link';
import Head from 'next/head';
export default function SiteHeader() {
  const [showMobileMenu, toggleMobileMenu] = useState(false);
  const toggleSideMenu = () => {
    toggleMobileMenu(!showMobileMenu);
    console.log('toggle menu');
  };
  return (
    <>
      <Head>
        <meta charset='utf-8' />
        <meta http-equiv='X-UA-Compatible' content='IE=edge' />
        <meta
          name='viewport'
          content='width=device-width,initial-scale=1,minimum-scale=1,maximum-scale=1,user-scalable=no'
        />
        <meta name='description' content='Dietitian' />
        <meta name='keywords' content='Keywords' />
        <title>Kajol Jain | Dietitian</title>

        <link rel='manifest' href='/manifest.json' />
        <link
          rel='icon'
          type='image/png'
          sizes='32x32'
          href='/icons/favicon-32x32.png'
        />
        <link
          rel='icon'
          type='image/png'
          sizes='96x96'
          href='/icons/favicon-96x96.png'
        />
        <link
          rel='icon'
          type='image/png'
          sizes='16x16'
          href='/icons/favicon-16x16.png'
        />
        <link
          rel='apple-touch-icon'
          sizes='57x57'
          href='/icons/apple-icon-57x57.png'
        />
        <link
          rel='apple-touch-icon'
          sizes='60x60'
          href='/icons/apple-icon-60x60.png'
        />
        <link
          rel='apple-touch-icon'
          sizes='72x72'
          href='/icons/apple-icon-72x72.png'
        />
        <link
          rel='apple-touch-icon'
          sizes='76x76'
          href='/icons/apple-icon-76x76.png'
        />
        <link
          rel='apple-touch-icon'
          sizes='114x114'
          href='/icons/apple-icon-114x114.png'
        />
        <link
          rel='apple-touch-icon'
          sizes='120x120'
          href='/icons/apple-icon-120x120.png'
        />
        <link
          rel='apple-touch-icon'
          sizes='144x144'
          href='/icons/apple-icon-144x144.png'
        />
        <link
          rel='apple-touch-icon'
          sizes='152x152'
          href='/icons/apple-icon-152x152.png'
        />
        <link
          rel='apple-touch-icon'
          sizes='180x180'
          href='/icons/apple-icon-180x180.png'
        ></link>
        <meta name='theme-color' content='#317EFB' />
      </Head>
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
    </>
  );
}
