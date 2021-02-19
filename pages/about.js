import Head from 'next/head';
import SiteHeader from '../components/siteHeader';

export default function About() {
  return (
    <>
      <Head>
        <title>Kajol Jain | About Me</title>
      </Head>
      <div id='site-content'>
        <SiteHeader />
        <main className='main-content'>
          <div className='author-bio'>
            <div className='container'>
              <div className='row'>
                <div className='col-md-5'>
                  <figure className='profile-picture'>
                    <img
                      src='https://demo.themezy.com/system/resources/demo_themes/000/000/022//dummy/person@2x.jpg'
                      alt=''
                    />
                  </figure>
                </div>
                <div className='col-md-6 col-md-offset-1'>
                  <h2>
                    Hello, <br /> I am Kajol Jain
                  </h2>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit,
                    sed do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                    ullamco laboris nisi ut aliquip ex ea commodo consequat.{' '}
                  </p>
                  <ul className='person-detail'>
                    <li>
                      <span className='icon'>
                        <img src='https://demo.themezy.com/system/resources/demo_themes/000/000/022//images/icon-baby@2x.png' />
                      </span>
                      Born: <strong>07.01.1996</strong>
                    </li>
                    <li>
                      <span className='icon'>
                        <img src='https://demo.themezy.com/system/resources/demo_themes/000/000/022//images/icon-map-marker@2x.png' />
                      </span>
                      City: <strong>Vadodara</strong>
                    </li>
                    <li>
                      <span className='icon'>
                        <img src='https://demo.themezy.com/system/resources/demo_themes/000/000/022//images/icon-heart@2x.png' />
                      </span>
                      Favourites: <strong>Lorem ipsum, Dolor sit</strong>
                    </li>
                    <li>
                      <span className='icon'>
                        <img src='https://demo.themezy.com/system/resources/demo_themes/000/000/022//images/icon-clock@2x.png' />
                      </span>
                      Experience: <strong>6 years</strong>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </main>
      </div>
    </>
  );
}
