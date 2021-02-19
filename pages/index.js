import Head from 'next/head';
import SiteHeader from '../components/siteHeader';

export default function Home() {
  return (
    <>
      <Head>
        <title>Kajol Jain | Dietician</title>
      </Head>

      <div id='site-content'>
        <SiteHeader />
        <div className='hero'>
          <div className='container'>
            <i className='icon-cupcake logo'></i>
            <h1 className='site-title'>Kajol Jain</h1>
            <small className='site-description'>Professional Dietician</small>
          </div>
        </div>
        <main className='main-content'>
          <div className='fullwidth-block cooking-section category-block'>
            <div className='container'>
              <figure>
                <img
                  src='https://demo.themezy.com/system/resources/demo_themes/000/000/022//dummy/cooking@2x.png'
                  alt='cooking'
                />
              </figure>
              <div className='category-content'>
                <h1 className='category-title'>Lorem ipsum dolor sit</h1>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit. At
                  autem aperiam ab, rem dignissimos ducimus soluta culpa
                  veritatis consequuntur asperiores, ad cum, ipsum quidem harum
                  error dolores quia eius quae.
                </p>
                <a href='#' className='button'>
                  Read more
                </a>
              </div>
            </div>
          </div>
          <div className='fullwidth-block restaurant-section category-block'>
            <div className='container'>
              <figure>
                <img
                  src='https://demo.themezy.com/system/resources/demo_themes/000/000/022//dummy/restaurant@2x.png'
                  alt='restaurant'
                />
              </figure>
              <div className='category-content'>
                <h1 className='category-title'>Duis aute reprehenderit</h1>
                <p>
                  Perspiciatis unde omnis iste natus error sit voluptatem
                  accusantium doloremque laudantium, totam rem aperiam, eaque
                  ipsa quae ab illo inventore veritatis et quasi architecto
                  beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem.
                </p>
                <a href='#' className='button'>
                  Read more
                </a>
              </div>
            </div>
          </div>

          <div className='fullwidth-block fruits-section category-block'>
            <div className='container'>
              <figure>
                <img
                  src='https://demo.themezy.com/system/resources/demo_themes/000/000/022//dummy/fruits@2x.png'
                  alt='fruits'
                />
              </figure>
              <div className='category-content'>
                <h1 className='category-title'>Nam libero tempore</h1>
                <p>
                  Dignissimos ducimus qui blanditiis praesentium voluptatum
                  deleniti atque corrupti quos dolores et quas molestias
                  excepturi sint occaecati cupiditate non provident, similique
                  sunt in culpa qui officia deserunt mollitia animi, id est
                  laborum.
                </p>
                <a href='#' className='button'>
                  Read more
                </a>
              </div>
            </div>
          </div>

          <div className='fullwidth-block vegetables-section category-block'>
            <div className='container'>
              <figure>
                <img
                  src='https://demo.themezy.com/system/resources/demo_themes/000/000/022//dummy/vegetables@2x.png'
                  alt='vegetables'
                />
              </figure>
              <div className='category-content'>
                <h1 className='category-title'>Sint molestiae recusandae</h1>
                <p>
                  Cupiditate non provident, similique sunt in culpa qui officia
                  deserunt mollitia animi, id est laborum et dolorum fuga. Et
                  harum quidem rerum facilis est et expedita distinctio. Nam
                  libero tempore, cum soluta nobis est eligendi optio cumque
                  nihil.
                </p>
                <a href='#' className='button'>
                  Read more
                </a>
              </div>
            </div>
          </div>
        </main>
      </div>
    </>
  );
}
