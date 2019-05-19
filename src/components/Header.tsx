import React from 'react';
import { StaticQuery, graphql } from 'gatsby';
import { Link } from 'react-scroll';
import Img from 'gatsby-image';
import config from '../../config/SiteConfig';

const Header = () => {
  return (
    <StaticQuery
      query={graphql`
        query {
          bookCover: file(relativePath: { eq: "assets/pwa-angular-book-front-cover.png" }) {
            childImageSharp {
              fluid(maxWidth: 900) {
                ...GatsbyImageSharpFluid
              }
            }
          }
        }
      `}
      render={(data: any) => (
        <header className="section header color-1 app-landing-header">
          <div className="shape-wrapper">
            <div className="shape shape-background shape-main gradient gradient-53" />
            <div className="shape shape-background shape-top gradient gradient-35" />
          </div>
          <div className="container overflow-hidden">
            <div className="row gap-y align-items-center">
              <div className="col-md-12">
                <p className="lead d-flex align-items-center" />
              </div>
              <div className="col-md-6 col-lg-6">
                <p className="lead d-flex align-items-center my-0">Majid Hajian & Maxim Salnikov present:</p>
                <h1 className="bold display-lg-2 font-lg mb-5">
                  Progressive Web Apps
                  <span className="d-block light font-md">With Angular</span>
                </h1>
                <p className="lead">
                  1st comprehensive Angular PWA Book
                  <br />
                  Create Responsive, Fast and Reliable Angular PWAs
                </p>
                <div className="nav mt-5 align-items-center">
                  <a
                    rel="noopener"
                    href={config.Amazon_Link}
                    target="_blank"
                    className="btn btn-rounded btn-lg btn-4 my-2 shadow mr-3 px-4 text-capitalize"
                  >
                    Pre-order now!
                  </a>
                  <Link
                    activeClass="active"
                    to="Footer"
                    spy={true}
                    smooth={true}
                    offset={-90}
                    duration={500}
                    className="btn btn-rounded btn-lg btn-2 my-2 shadow mr-3 px-4 text-capitalize"
                  >
                    Stay up-to-date
                  </Link>
                </div>
              </div>
              <div className="col-md-6 col-lg-5 ml-lg-auto">
                <div data-aos="fade-left">
                  <div className="screen">
                    <Img
                      fluid={data.bookCover.childImageSharp.fluid}
                      className="img-responsive"
                      alt="Progressive Web App With Angular Book"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </header>
      )}
    />
  );
};
export default Header;
