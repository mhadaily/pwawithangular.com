import React from 'react';
import { StaticQuery, graphql } from 'gatsby';
import Img from 'gatsby-image';

const Author = (props: { id: string }) => {
  return (
    <StaticQuery
      query={graphql`
        query {
          majidImg: file(relativePath: { eq: "assets/majid-hajian.png" }) {
            childImageSharp {
              fluid(maxWidth: 900) {
                ...GatsbyImageSharpFluid
              }
            }
          }
          maximImg: file(relativePath: { eq: "assets/maxim-salnikov.png" }) {
            childImageSharp {
              fluid(maxWidth: 900) {
                ...GatsbyImageSharpFluid
              }
            }
          }
        }
      `}
      render={(data: any) => (
        <section id={props.id} className="section ">
          <div className="shape-wrapper">
            <div className="shape shape-background shape-right" />
            <div className="shape shape-background top shape-left bg-3 op-1" />
          </div>
          <div className="container pb-6">
            <div className="row gap-y align-items-center py-5">
              <div className="col-12 text-center">
                <div className="section-heading">
                  <h2 className="bold">Who are behind the book?</h2>
                </div>
              </div>
              <div className="col-md-6">
                <Img fluid={data.majidImg.childImageSharp.fluid} className="img-responsive" alt="Majid Hajian, PWA Expert" />
              </div>
              <div className="col-md-6">
                <h2 className="bold text-capitalize">Majid Hajian</h2>
                <p>DevRel Manager, Passionate Software Engineer</p>
                <p className="regular">
                  Majid Hajian is a software developer has developed and architected complex web applications since 2007 after he graduated
                  as a software engineer. A software developer at heart, Majid is passionate about web platform especially hardware
                  connectivity and performance and in particular Progressive Web Apps. He loves sharing his knowledge with the community by
                  writing on his blog majidhajian.com and tweeting @mhadaily, speaking at conferences, visiting developers to help them,
                  contributing to open source and organizing meetups and events.
                </p>
                <p className="regular">
                  Majid is the author of "Progressive web app with Angular" book published by Apress and "Progressive Web Apps" video
                  tutorial published by PacktPub and Udemy.
                </p>
                <p className="regular">
                  He is (co)organizer of a few meetups in Norway dedicated to frontend and mobile in Oslo including Mobile meetup and Vue.js
                  Oslo and Angular Oslo, Framisa and an Organizer of Mobile Era and ngVikings which are the main Nordic conferences for
                  mobile and Angular.
                </p>
              </div>
            </div>
            <div className="row gap-y align-items-center py-5">
              <div className="col-md-6 order-md-2">
                <Img fluid={data.maximImg.childImageSharp.fluid} className="img-responsive" alt="Maxim Salnikov, PWA Expert" />
              </div>
              <div className="col-md-6">
                <h2 className="bold text-capitalize">Maxim Salnikov</h2>
                <p>Azure Developer Technical Lead</p>
                <p className="regular">
                  Maxim Salnikov is an Oslo-based cloud and web front-end geek with a strong passion for the developer community building.
                  He architects and builds complex web applications since the end of the last century, and has extensive experience with all
                  aspects of web platform focusing on the apps managing real-time data from IoT devices, and Progressive Web Apps. He is a
                  Google Developer Expert in Web Technologies & IoT, and a former Microsoft MVP in Development Technologies.
                </p>
                <p className="regular">
                  Maxim is a founder and active contributor to two conferences: Mobile Era and ngVikings - Nordics’ main conferences for
                  mobile and Angular developers respectively. Also, he leads Norway’s largest meetups dedicated to web front-end and mobile:
                  Angular Oslo, Mobile Meetup, Oslo PWA, Framsia.
                </p>
                <p className="regular">
                  Maxim is passionate about sharing his web platform experience and knowledge with the community. He travels extensively for
                  visiting developers events and speaking/training at conferences and meetups around the world.
                </p>
              </div>
            </div>
          </div>
        </section>
      )}
    />
  );
};

export default Author;
