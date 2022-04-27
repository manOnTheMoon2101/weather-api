import '../styles/globals.css';
import Head from 'next/head';

function MyApp({ Component, pageProps }) {
  return <>
  
  <Head>

  <title>Cleve Clayton(Weather API)</title>
        <meta name="description" content="Hey I'm Cleve and I am a..." />
        <link rel="icon" type='image/icon type' href='favicon.ico'/>


<link rel="preconnect" href="https://fonts.googleapis.com"/>
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin/>
<link href="https://fonts.googleapis.com/css2?family=Annie+Use+Your+Telescope&display=swap" rel="stylesheet"/>



  </Head>
  
  
  
  <Component {...pageProps} />



  </>
}

export default MyApp
