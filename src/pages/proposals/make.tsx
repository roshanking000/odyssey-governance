import type { NextPage } from 'next';

import { Footer, Header, Layout } from 'components';
import { MakeAProposal } from 'containers';
import favicon from 'assets/img/favicon.ico';

const MakeAProposalPage: NextPage = () => (
  <Layout
    header={(<Header />)}
    footer={(<Footer />)}
    link={{
      rel: 'icon',
      href: favicon.src,
    }}
  >
    <MakeAProposal />
  </Layout>
);

export default MakeAProposalPage;
