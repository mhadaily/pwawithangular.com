import React, { useState } from 'react';
import { ISlide } from '../models/Slide';
import { StaticQuery, graphql } from 'gatsby';

const SvgBgComponent = (props: any) => (
  <svg className="shape h-100" viewBox="0 0 249.28 253.71" {...props}>
    <path
      d="M236.5 78.38a75.26 75.26 0 0 0-7.74-9.67S182.91 16.47 105.14 2A83.91 83.91 0 0 0 4.53 69.71C-11.34 147 19.55 209 19.73 209.4a75 75 0 0 0 6 10.77c19.06 28.33 54.33 39.57 86.73 30.43 0 0 52.47-12.9 111.35-71.37 27.87-26.67 34.03-69.13 12.69-100.85z"
      opacity={0.8}
      fill="url(#linear-gradient)"
    />
  </svg>
);

const SwiperSlide = ({ name, position, content }: ISlide) => {
  return (
    <div className="swiper-slide">
      <blockquote>
        <p className="lead bold">{content}</p>
        <hr className="w-10 mt-5" />
        <div className="small">
          <span className="bold d-block">{name},</span> {position}
        </div>
      </blockquote>
    </div>
  );
};

const SwiperContainer = (props: { data: ISlide[]; selectedIndex: number }) => {
  return (
    <div className="swiper-container">
      <div
        className="swiper-wrapper"
        style={{
          transition: 'opacity 250ms ease-out, transform 250ms ease-out',
          transform: `translate3d(${`${props.selectedIndex * -540}px`}, 0, 0)`,
        }}
      >
        {props.data.map((slide, i) => {
          return <SwiperSlide {...slide} key={i} />;
        })}
      </div>
    </div>
  );
};

interface IAvatar extends ISlide {
  index: number;
  isActive: boolean;
  setselectedIndex: Function;
}

const UserAvatar = ({ avatar, style, name, isActive, index, setselectedIndex }: IAvatar) => {
  return (
    <div
      onClick={() => {
        setselectedIndex({ selectedIndex: index });
      }}
      className={`review absolute user nav-item ${isActive ? 'active' : ''}`}
      style={style}
      data-step={index}
    >
      <div className="text">
        <img src={avatar} className="img-responsive shadow rounded-circle" alt={name} data-aos="zoom-in" />
      </div>
    </div>
  );
};

const UserReviews = (props: { data: ISlide[]; setselectedIndex: Function; selectedIndex: number }) => {
  return (
    <div className="user-reviews" id="user-review-nav">
      {props.data.map((slide, i) => {
        return <UserAvatar {...slide} isActive={i === props.selectedIndex} index={i} key={i} setselectedIndex={props.setselectedIndex} />;
      })}
    </div>
  );
};

const Testimonials = (props: { id: string; data: ISlide[] }) => {
  const [{ selectedIndex }, setselectedIndex] = useState({ selectedIndex: 0 });
  return (
    <StaticQuery
      query={graphql`
        query {
          mapDot: file(relativePath: { eq: "assets/icons/map-dots.svg" }) {
            extension
            publicURL
          }
        }
      `}
      render={(data: any) => (
        <section id={props.id} className="section shape-testimonials edge bg-6 top-left">
          <div className="shape-wrapper">
            <SvgBgComponent />
          </div>
          {/* <div className="container bring-to-front">
            <div className="row">
              <div className="col-lg-6 ml-lg-auto">
                <div className="section-heading text-center text-lg-left">
                  <h2 className="bold">What Angular experts say</h2>
                </div>
              </div>
            </div>
            <div className="row align-items-center">
              <div className="col-md-6 order-sm-2 image-background contain" style={{ backgroundImage: `url(${data.mapDot.publicURL})` }}>
                <UserReviews {...props} setselectedIndex={setselectedIndex} selectedIndex={selectedIndex} />
              </div>
              <div className="col-md-6">
                <SwiperContainer {...props} selectedIndex={selectedIndex} />
              </div>
            </div>
          </div> */}
        </section>
      )}
    />
  );
};
export default Testimonials;
