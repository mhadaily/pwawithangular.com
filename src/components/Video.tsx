import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlay } from '@fortawesome/free-solid-svg-icons';
import { StaticQuery, graphql } from 'gatsby';
import Img from 'gatsby-image';

const Video = (props: { id: string }) => {
  return (
    <StaticQuery
      query={graphql`
        query {
          videoBg: file(relativePath: { eq: "assets/angular-pwa-book-coffee.jpg" }) {
            childImageSharp {
              fluid(maxWidth: 900, quality: 70) {
                ...GatsbyImageSharpFluid
              }
            }
          }
        }
      `}
      render={(data: any) => (
        <section id={props.id} className="get-started">
          <div className="container pt-0 pb-9 bring-to-front">
            <div className="pb-8 position-relative">
              <div className="browser shadow-lg mx-auto" data-aos="fade-up">
                <div className="screen">
                  <Img fluid={data.videoBg.childImageSharp.fluid} className="img-responsive" alt="Maxim Salnikov and Majid Hajian Video" />
                </div>
              </div>
              <div className="floating-box bg-1">
                <div className="p-4 p-lg-5 shadow-lg rounded text-center">
                  <p className="lead regular">
                    We would love to meet you in person but until then, let's have a few recoded words with you on youtube.
                  </p>
                  <p className="handwritten highlight font-md mt-5">We have something to say</p>
                  <button aria-label="Play Now" className="btn btn-rounded btn-lg btn-3">
                    Play Now
                  </button>
                  <hr className="w-50 mx-auto my-4" />
                  <p className="small color-2">We would love to hear from you too, feel free to contact us anytime.</p>
                </div>
              </div>
              <a
                href="https://www.youtube.com/watch?v=MXghcI8hcWU"
                className="modal-popup mfp-iframe play-video btn btn-3 btn-circle color-1 shadow"
                target="_blank"
                rel="noopener"
              >
                <FontAwesomeIcon icon={faPlay} size="3x" />
              </a>
            </div>
          </div>
        </section>
      )}
    />
  );
};
export default Video;
