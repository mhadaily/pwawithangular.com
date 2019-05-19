import React from 'react';
import { StaticQuery, graphql } from 'gatsby';
import Img from 'gatsby-image';

const Promotion = (props: { id: string }) => {
  return (
    <StaticQuery
      query={graphql`
        query {
          bookBg: file(relativePath: { eq: "assets/angular-pwa-book-beside-laptop.jpg" }) {
            childImageSharp {
              fluid(maxWidth: 1200, quality: 80) {
                ...GatsbyImageSharpFluid
              }
            }
          }
        }
      `}
      render={(data: any) => (
        <section id={props.id} className="section">
          <div className="container-wide">
            <div className="row gap-y align-items-center text-center text-lg-left">
              <div className="col-10 col-lg-4 mx-auto">
                <p className="lead color-2">
                  Harness the power of Angular to build fast, high performance progressive web apps that work offline. Learn exactly how to
                  create an Angular Progressive Web App (PWA) from scratch, how you can use different tools to audit and improve it, and
                  leverage Angular CLI or Workbox to turn your app into a PWA.
                </p>
                <p>
                  Using browser APIs – including the Credential Management, Payment Request, Geolocation, Web Bluetooth, WebUSB and Generic
                  Sensors APIs – you can unleash the potential of PWAs and build applications that enhance user experience. Angular’s
                  game-changing built-in features, including the Angular service worker module, can be leveraged to construct responsive and
                  reliable PWAs that can look and feel just like native mobile apps.
                </p>
                <p>
                  You'll learn how to boost your app speed, how to increase user engagement using push notifications, and how to implement
                  offline storage and different caching APIs in Angular. You'll even see how to convert an existing Angular app into a PWA.
                  Whether you’re new to building PWAs, or want to learn how to use Angular to improve your app development, Progressive Web
                  Apps with Angular provides the know-how to build and deploy an Angular PWA.
                </p>
              </div>
              <div className="col-12 col-lg-6 pr-0">
                <Img fluid={data.bookBg.childImageSharp.fluid} alt="PWA Book" className="img-responsive shadow" />
              </div>
            </div>
          </div>
        </section>
      )}
    />
  );
};
export default Promotion;
