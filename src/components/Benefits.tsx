import React from 'react';
import { StaticQuery, graphql } from 'gatsby';
import Img from 'gatsby-image';

const Benefits = ({
  list,
  title,
  subtitle,
  id,
}: {
  id: string;
  title: string;
  subtitle: string;
  list: { title: string; description: string }[];
}) => {
  return (
    <StaticQuery
      query={graphql`
        query {
          bookCover: file(relativePath: { eq: "assets/ng-progressive-web-app-book.png" }) {
            childImageSharp {
              fluid(maxWidth: 900) {
                ...GatsbyImageSharpFluid
              }
            }
          }
        }
      `}
      render={(data: any) => (
        <section id={id} className="section overflow-hidden">
          <div className="container bring-to-front">
            <div className="row gap-y align-items-center">
              <div className="col-md-6 col-lg-5 mr-lg-auto">
                <div className="center-xy op-1">
                  <div className="shape shape-background rounded-circle shadow-lg bg-4" style={{ width: '600px', height: '600px' }} />
                </div>
                <div className="align-items-center">
                  <div className="screen">
                    <Img
                      fluid={data.bookCover.childImageSharp.fluid}
                      className="img-responsive"
                      alt="Progressive Web App With Angular Book Benefits"
                    />
                  </div>
                </div>
              </div>
              <div className="col-md-6 text-center text-md-left">
                <div className="section-heading">
                  <h2 className="bold font-md">{title}</h2>
                  <p>{subtitle}</p>
                </div>
                <div className="row gap-y">
                  {list.map((benefit, i) => {
                    return (
                      <div className="col-md-6" key={i}>
                        <div className="media flex-column flex-lg-row align-items-center align-items-md-start">
                          <i className="mx-auto ml-md-0 mr-md-3 accent pe pe-7s-timer pe-3x" />
                          <div className="media-body mt-3 mt-md-0">
                            <h5 className="bold mt-0 mb-1">{benefit.title}</h5>
                            <p className="m-0 d-md-none d-lg-block">{benefit.description}</p>
                          </div>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
        </section>
      )}
    />
  );
};
export default Benefits;
