import '../styles/globals.css';
import '../styles/style.css';
import '../public/fonts/iconmoon.css';
import '../styles/scss/layout/_footer.scss';
import '../styles/scss/layout/_header.scss';
import '../styles/scss/layout/_content.scss';
import Footer from '../components/footer';
import Header from '../components/header';
function MyApp({ Component, pageProps }) {
  return (
    <>
      <Header />
      <Component {...pageProps} />
      <Footer />
    </>
  );
}

export default MyApp;
