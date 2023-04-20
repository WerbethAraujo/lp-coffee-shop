import About from '@/components/About';
import Details from '@/components/Details';
import Footer from '@/components/Footer';
import Header from '@/components/Header';
import Navbar from '@/components/Navbar';
import Products from '@/components/Products';
import Reviews from '@/components/Reviews';
import Social from '@/components/Social';
import Head from 'next/head';

export default function Home() {
  return (
    <>
      <Head>
        <title>Coffee Time</title>
        <meta name='viewport' content='width=device-width, initial-scale=1' />
      </Head>
      <main>
        <Navbar />
        <Header />
        <Details />
        <About />
        <Products />
        <Social />
        <Reviews />
        <Footer />
      </main>
    </>
  );
}
