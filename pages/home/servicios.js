import Link from 'next/link';
import Layout from '../../components/Layout';
import Header from '../../components/Header';
import Features from '../../components/Features';

function Home() {
  return (
    <>
      <Layout withBackground>
        <Features />
      </Layout>
    </>
  );
}

export default Home;