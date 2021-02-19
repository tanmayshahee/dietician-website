import { useEffect } from 'react';
import Head from 'next/head';
import SiteHeader from '../components/siteHeader';
import { useForm } from 'react-hook-form';
import emailjs from 'emailjs-com';
export default function Contact() {
  const { register, handleSubmit, errors } = useForm();

  useEffect(() => {
    emailjs.init('user_UNNbfLrqfg9bNWmQ4HidL');
  }, []);

  const onSubmit = (data, e) => {
    console.log(data);

    let templateParams = {
      user_name: data.name,
      user__NAME: data.name,
      user_mobile: data.mobile,
      user_Email: data.email,
      reply_to: data.email,
      message: data.message,
      to_name: 'Kajol',
    };
    emailjs
      .send(
        'contact_service',
        'template_contact_form',
        templateParams,
        'user_UNNbfLrqfg9bNWmQ4HidL'
      )
      .then(
        (response) => {
          console.log('SUCCESS!', response.status, response.text);
          e.target.reset();
        },
        (err) => {
          console.log('FAILED...', err);
        }
      );
  };
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

              <form onSubmit={handleSubmit(onSubmit)}>
                <div className='contact-form'>
                  <div className='row'>
                    <div className='col-md-5'>
                      <input
                        type='text'
                        name={'name'}
                        ref={register}
                        placeholder='Your name...'
                      />
                      <input
                        type='text'
                        name={'email'}
                        ref={register}
                        placeholder='Email...'
                      />
                      <input
                        type='number'
                        name={'mobile'}
                        ref={register}
                        placeholder='Mobile Number...'
                      />
                    </div>
                    <div className='col-md-7'>
                      <textarea
                        name={'message'}
                        ref={register}
                        placeholder='Message...'
                      ></textarea>
                      <input type='submit' value='Send message' />
                    </div>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </main>
      </div>
    </>
  );
}
