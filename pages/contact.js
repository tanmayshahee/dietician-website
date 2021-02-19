import Head from 'next/head';
import SiteHeader from '../components/siteHeader';
export default function Contact() {
  return (
    <>
      <Head>
        <title>Kajol Jain | Contact</title>
      </Head>
      <div id='site-content'>
        <SiteHeader />
        <main className='main-content'>
          <div className='content'>
            <div className='container'>
              <h2 className='entry-title'>
                Curabitur sit amet ultricies felis nunc ultrices gravida
                fringilla in volutpat massa vitae elementum tincidunt
              </h2>
              <p>
                Pellentesque erat erat, mattis non feugiat pharetra, viverra nec
                mauris. Nullam sed risus aliquam, congue nunc ac, convallis mi.
                Cras pellentesque sit amet urna fermentum ornare. Sed in metus
                justo. Cras sit amet odio eu enim condimentum pretium vitae nec
                enim. In aliquet dolor nisl.
              </p>

              <div className='contact-detail'>
                <span className='location'>
                  <img src='https://demo.themezy.com/system/resources/demo_themes/000/000/022//images/icon-map-marker-alt@2x.png' />{' '}
                  B-403 Arya's Govardhan Vasna Bhayli Road, Near Panchmukhi
                  Temple, Alkapuri Vadodara - 390007
                </span>
                <span className='email'>
                  <img src='https://demo.themezy.com/system/resources/demo_themes/000/000/022//images/icon-envelope@2x.png' />{' '}
                  <a href='mailto:rushukajol96@gmail.com'>
                    rushukajol96@gmail.com
                  </a>
                </span>
                <span className='phone'>
                  <img src='https://demo.themezy.com/system/resources/demo_themes/000/000/022//images/icon-phone@2x.png' />{' '}
                  <a href='tel:9714792743'>9714792743</a>
                </span>
              </div>

              {/* <div className='map'></div> */}

              <div className='contact-form'>
                <div className='row'>
                  <div className='col-md-5'>
                    <input type='text' placeholder='Your name...' />
                    <input type='text' placeholder='Email...' />
                    <input type='text' placeholder='Website...' />
                  </div>
                  <div className='col-md-7'>
                    <textarea placeholder='Message...'></textarea>
                    <input type='submit' value='Send message' />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </main>
      </div>
    </>
  );
}
