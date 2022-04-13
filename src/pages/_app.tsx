import '../../styles/globals.css';
import type { AppProps } from 'next/app';
import Layout from '../components/Layout';

function Wa2me({ Component, pageProps }: AppProps) {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
}

export default Wa2me;
