import React from 'react'
import LatestProduct from './common/LatestProduct';
import FeaturedProducts from './common/FeaturedProducts';
import Header from './common/Header';
import Footer from './common/Footer';
import Hero from './common/Hero';
import Layout from './common/Layout';


const Home = () => {
  return (
    <>
      <Layout>
        <Hero/>
        <LatestProduct/>
        <FeaturedProducts/>
      </Layout>
    </>
  )
}

export default Home