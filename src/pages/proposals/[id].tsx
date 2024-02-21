import type { NextPage } from 'next';

import { Footer, Header, Layout } from 'components';
import { VotingDetails } from 'containers';
import favicon from 'assets/img/favicon.ico';

const VotingDetailsPage: NextPage = () => (
  <Layout
    header={(<Header />)}
    footer={(<Footer />)}
    link={{
      rel: 'icon',
      href: favicon.src,
    }}
  >
    <VotingDetails />
  </Layout>
);

export default VotingDetailsPage;
