import Link from 'next/link';

export default function footer() {
  return (
    <footer className='site-footer'>
      <div className='container'>
        <i className='icon-cupcake logo'></i>
        <nav className='footer-navigation'>
          <Link href='/about'>
            <a>About me</a>
          </Link>
          <Link href='/offer'>
            <a>My Offer</a>
          </Link>
          <Link href='/recipes'>
            <a>Recipes</a>
          </Link>
          <Link href='/contact'>
            <a>Contact</a>
          </Link>
        </nav>
        <div className='subscribe'>
          <form action='#'>
            <input
              type='text'
              placeholder='Enter your email to join newsletter...'
            />
            <input type='submit' value='Subscribe' />
          </form>
        </div>
        <div className='social-links'>
          <a href='#' className='facebook'>
            <i className='fa fa-facebook'></i>
          </a>
          <a href='#' className='twitter'>
            <i className='fa fa-twitter'></i>
          </a>
          <a href='#' className='google-plus'>
            <i className='fa fa-google-plus'></i>
          </a>
          <a href='#' className='pinterest'>
            <i className='fa fa-pinterest'></i>
          </a>
        </div>
        <div className='colophon'>
          <p>
            Copyright 2021. Designed and Developed by Tanmay Shah. All right
            reserved
          </p>
        </div>
      </div>
    </footer>
  );
}
