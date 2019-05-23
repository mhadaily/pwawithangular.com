import React from 'react';
import { StaticQuery, graphql } from 'gatsby';

const Post = () => {
  return (
    <div className="col-md-6 col-lg-4">
      <div className="card card-blog shadow-box shadow-hover border-0">
        <a href="#">
          <img className="card-img-top img-responsive" src="https://picsum.photos/350/200/?random&gravity=north" alt="" />
        </a>
        <div className="card-body">
          <p className="card-title regular">
            <a href="#">Discover the Beauty of DashCore</a>
          </p>
          <p className="card-text color-2">
            Appropriately deliver standardized internal or "organic" sources whereas worldwide mindshare. Holisticly communicate premier...
          </p>
        </div>
      </div>
    </div>
  );
};

const Blog = (props: { id: string }) => {
  return (
    <StaticQuery
      query={graphql`
        query {
          bookCover: file(relativePath: { eq: "assets/ng-progressive-web-app-book.png" }) {
            childImageSharp {
              fluid(maxWidth: 900) {
                ...GatsbyImageSharpFluid_withWebp
              }
            }
          }
        }
      `}
      render={(data: any) => (
        <section id={props.id} className="section b-b">
          <div className="container">
            <div className="section-heading mb-6 text-center">
              <div className="bold small text-uppercase pb-4">What's New?</div>
              <h2>Angular PWA latest posts</h2>
            </div>
            <div className="row gap-y">
              {[1, 2, 3, 4, 5, 6].map(i => {
                return <Post key={i} />;
              })}
            </div>
            <div className="row gap-y text-center">
              <div className="col-12">
                <a href="https://www.angularpwa.dev" className="btn btn-5 btn-rounded mt-5 color-1" target="_blank" rel="noopener">
                  Read More on www.angularpwa.dev
                </a>
              </div>
            </div>
          </div>
        </section>
      )}
    />
  );
};

export default Blog;
