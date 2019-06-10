import React from 'react';
import { StaticQuery, graphql } from 'gatsby';
import Img from 'gatsby-image';

const TableOfContent = (props: { id: string }) => {
  return (
    <StaticQuery
      query={graphql`
        fragment CommonOptimization on File {
          childImageSharp {
            fluid(maxWidth: 900, quality: 80) {
              ...GatsbyImageSharpFluid_withWebp
            }
          }
        }
        query {
          prev_1: file(relativePath: { eq: "assets/previews/1.png" }) {
            ...CommonOptimization
          }
          prev_2: file(relativePath: { eq: "assets/previews/2.png" }) {
            ...CommonOptimization
          }
          prev_3: file(relativePath: { eq: "assets/previews/3.png" }) {
            ...CommonOptimization
          }
          prev_4: file(relativePath: { eq: "assets/previews/4.png" }) {
            ...CommonOptimization
          }
          prev_5: file(relativePath: { eq: "assets/previews/5.png" }) {
            ...CommonOptimization
          }
          prev_6: file(relativePath: { eq: "assets/previews/6.png" }) {
            ...CommonOptimization
          }
        }
      `}
      render={(data: any) => (
        <section id={props.id} className="section features-carousel b-b">
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
                        <a href={data[key].childImageSharp.fluid.src} target="_blank" rel="noopener">
                          <Img
                            fluid={data[key].childImageSharp.fluid}
                            className="img-responsive"
                            alt="PWA with Angular Book, table of contents"
                          />
                        </a>
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

export default TableOfContent;
