import { NextPage } from 'next';

import { Voting } from 'containers';
import { Footer, Header, Layout } from 'components';
import favicon from 'assets/img/favicon.ico';

const Home: NextPage = () => (
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
);
export default Home;
