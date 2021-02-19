import Head from 'next/head';
export default function Header() {
  return (
    <Head>
      <meta charset='UTF-8'></meta>
      <meta http-equiv='X-UA-Compatible' content='IE=edge'></meta>
      <meta
        name='viewport'
        content='width=device-width, initial-scale=1.0,maximum-scale=1'
      ></meta>
      <link
        href='http://fonts.googleapis.com/css?family=Open+Sans:300,400,600,700|'
        rel='stylesheet'
        type='text/css'
      />
      <link
        href='/fonts/font-awesome.min.css'
        rel='stylesheet'
        type='text/css'
      ></link>
    </Head>
  );
}
