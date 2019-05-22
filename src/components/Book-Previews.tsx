import React from 'react';
import { StaticQuery, graphql } from 'gatsby';
import Img from 'gatsby-image';

const BookReview = () => {
  return (
    <StaticQuery
      query={graphql`
        query {
          prev_1: file(relativePath: { eq: "assets/previews/1.png" }) {
            childImageSharp {
              fluid(maxWidth: 900, quality: 80) {
                ...GatsbyImageSharpFluid_withWebp
              }
            }
          }
          prev_2: file(relativePath: { eq: "assets/previews/2.png" }) {
            childImageSharp {
              fluid(maxWidth: 900, quality: 80) {
                ...GatsbyImageSharpFluid_withWebp
              }
            }
          }
          prev_3: file(relativePath: { eq: "assets/previews/3.png" }) {
            childImageSharp {
              fluid(maxWidth: 900, quality: 80) {
                ...GatsbyImageSharpFluid_withWebp
              }
            }
          }
          prev_4: file(relativePath: { eq: "assets/previews/4.png" }) {
            childImageSharp {
              fluid(maxWidth: 900, quality: 80) {
                ...GatsbyImageSharpFluid_withWebp
              }
            }
          }
          prev_5: file(relativePath: { eq: "assets/previews/5.png" }) {
            childImageSharp {
              fluid(maxWidth: 900, quality: 80) {
                ...GatsbyImageSharpFluid_withWebp
              }
            }
          }
          prev_6: file(relativePath: { eq: "assets/previews/6.png" }) {
            childImageSharp {
              fluid(maxWidth: 900, quality: 80) {
                ...GatsbyImageSharpFluid_withWebp
              }
            }
          }
        }
      `}
      render={(data: any) => (
        <section className="section features-carousel b-b">
          <div className="container">
            <div className="section-heading mb-6 text-center">
              <div className="bold small text-uppercase pb-4">Overview of</div>
              <h2>Table of Contents</h2>
            </div>
            <div className="row">
              {Object.keys(data).map((key, i) => {
                return (
                  <div className="col-md-4 py-4 rounded shadow-hover text-center" key={i}>
                    <div className="card border-0 shadow">
                      <div className="card-body">
                          {console.log(data[key])}
                        <Img fluid={data[key].childImageSharp.fluid} className="img-responsive" alt="Book table of contents" />
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>
      )}
    />
  );
};

export default BookReview;
