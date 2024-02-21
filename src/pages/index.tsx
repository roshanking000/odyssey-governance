import { NextPage } from 'next';
import Head from 'next/head';

import { Voting } from 'containers';
import { Footer, Header, Layout } from 'components';
import favicon from 'assets/img/favicon.ico';

const Home: NextPage = () => (
  <div>
    <Head>
      <title>Governance - Dione Protocol</title>
    </Head>
    <div className="App">
      <Layout
        header={(<Header />)}
        footer={(<Footer />)}
        link={{
          rel: 'icon',
          href: favicon.src,
        }}
      >
        <Voting />
      </Layout>
    </div>
  </div>
);
export default Home;
