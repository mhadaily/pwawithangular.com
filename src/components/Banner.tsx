import React from 'react';
import { StaticQuery, graphql } from 'gatsby';

const Banner = (props: { id: string }) => {
  return (
    <StaticQuery
      query={graphql`
        query {
          codeBg: file(relativePath: { eq: "assets/code-bg.jpg" }) {
            childImageSharp {
              fluid(maxWidth: 1200) {
                ...GatsbyImageSharpFluid
              }
            }
          }
        }
      `}
      render={(data: any) => (
        <section id={props.id} className="singl-testimonial shadow">
          <div className="container-fluid py-0">
            <div className="row align-items-center gradient gradient-53 color-1">
              <div className="col-md-3 mx-auto py-4 py-md-0">
                <p className="text-uppercase mb-0 badge badge-1">Source code ...</p>
                <p className="font-md bold mt-1 color-1">Lots of code samples which are included</p>
                <hr className="my-4" />
                <div className="small color-1">
                  <a href="https://github.com/mhadaily/awesome-apress-pwa" target="_blank" rel="noopener" className="color-1 bold d-block">
                    Download or Clone from Github
                  </a>
                </div>
              </div>
              <div
                className="col-12 col-md-7 image-background cover"
                style={{ backgroundImage: `url(${data.codeBg.childImageSharp.fluid.src})` }}
              />
            </div>
          </div>
        </section>
      )}
    />
  );
};
export default Banner;
