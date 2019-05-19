import React from 'react';
import { StaticQuery, graphql } from 'gatsby';
import { ThemeProvider, createGlobalStyle } from 'styled-components';

import theme from '../../config/Theme';
import { Nav, Footer, SEO } from '../components';

import './layout.scss';

const GlobalStyle = createGlobalStyle`
  
`;

export class Layout extends React.PureComponent<{}> {
  public render() {
    const { children } = this.props;

    return (
      <StaticQuery
        query={graphql`
          query LayoutQuery {
            site {
              buildTime(formatString: "DD.MM.YYYY")
            }
          }
        `}
        render={data => (
          <ThemeProvider theme={theme}>
            <React.Fragment>
              <GlobalStyle />
              <Nav id="Nav" />
              {children}
              <Footer builtTime={data.site.buildTime} id="Footer" />
            </React.Fragment>
          </ThemeProvider>
        )}
      />
    );
  }
}
