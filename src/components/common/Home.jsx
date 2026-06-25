import LatestProduct from './LatestProduct';
import FeaturedProducts from './FeaturedProducts';
import Hero from './Hero';
import Layout from './Layout';


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