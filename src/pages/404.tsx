import React from 'react';
import { Layout, Wrapper } from '../components';
import Helmet from 'react-helmet';
import config from '../../config/SiteConfig';

export default class NotFoundPage extends React.PureComponent<any> {
  public render() {
    return (
      <Layout>
        <Helmet title={`404 not found | ${config.siteTitle}`} />
        <Wrapper>
          <p>You just hit a route that doesn&#39;t exist... the sadness.</p>
        </Wrapper>
      </Layout>
    );
  }
}
