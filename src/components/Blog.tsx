import React from 'react';
import { StaticQuery, graphql } from 'gatsby';
import Img, { FluidObject } from 'gatsby-image';

interface IBlog {
  title: string;
  link: string;
  image: string;
  fluid: FluidObject;
}

const Post = (props: { blog: IBlog }) => {
  const { title, link, fluid } = props.blog;
  return (
    <div className="col-md-6 col-lg-4">
      <div className="card card-blog shadow-box shadow-hover border-1">
        <a href={link} target="_blank" rel="nofollow noopener">
          <Img fluid={fluid} className="card-img-top img-responsive" alt={title} />
        </a>
        <div className="card-body">
          <p className="card-title regular">
            <a href={link} className="color-3" target="_blank" rel="nofollow noopener">
              {title}
            </a>
          </p>
          {/* <p className="card-text color-2" /> */}
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
          images: allFile {
            edges {
              node {
                relativePath
                name
                childImageSharp {
                  fluid(maxWidth: 400) {
                    ...GatsbyImageSharpFluid_withWebp
                  }
                }
              }
            }
          }
          allBlogsJson {
            edges {
              node {
                title
                link
                image
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
              <h2>Latest Blogs</h2>
            </div>
            <div className="row gap-y">
              {data.allBlogsJson.edges
                .map((n: any) => {
                  return {
                    ...n.node,
                    fluid: data.images.edges.find((img: any) => img.node.relativePath === n.node.image).node.childImageSharp.fluid,
                  };
                })
                .map((blog: IBlog, i: number) => {
                  return <Post blog={blog} key={i} />;
                })}
            </div>
          </div>
        </section>
      )}
    />
  );
};

export default Blog;
