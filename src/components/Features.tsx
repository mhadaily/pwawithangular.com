import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPen } from '@fortawesome/free-solid-svg-icons';
import { IFeature } from '../models/Feature';

const FeatureSvgBg = () => (
  <svg viewBox="0 0 276.1 281.01" className="shape shape-xxl drop-shadow">
    <linearGradient id="linear-gradient" y1="140.5" x2="276.1" y2="140.5" gradientUnits="userSpaceOnUse">
      <stop offset="0" stopColor="#9c27b0" />
      <stop offset="1" stopColor="#7b20a2" />
    </linearGradient>
    <path
      d="M261.95 86.82a83.45 83.45 0 0 0-8.57-10.71s-50.84-57.89-137-73.9A92.94 92.94 0 0 0 5 77.21c-17.58 85.56 16.63 154.31 16.83 154.72a83.17 83.17 0 0 0 6.67 11.93c21.11 31.38 60.18 43.83 96.07 33.7 0 0 58.12-14.28 123.33-79 30.86-29.56 37.68-76.61 14.05-111.74z"
      fill="url(#linear-gradient)"
      opacity={0.8}
    />
  </svg>
);

const Feature = (props: IFeature) => {
  const { title, description } = props;
  return (
    <div className="col-md-4 py-4 rounded shadow-hover text-center">
      <div className="icon-shape mb-4">
        <FeatureSvgBg />
        <FontAwesomeIcon icon={faPen} size="2x" className="color-1 icon center-xy" />
      </div>
      <h5 className="bold text-capitalize">{title}</h5>
      <p>{description}</p>
    </div>
  );
};

const Features = (props: { id: string; data: IFeature[]; subtitle: string; title: string }) => {
  const { data, subtitle, title } = props;
  return (
    <section id={props.id} className="section features">
      <div className="container">
        <div className="section-heading mb-6 text-center">
          <h5 className="accent bold small text-uppercase">{subtitle}</h5>
          <h2>{title}</h2>
        </div>
        <div className="row gap-y text-center text-md-left">
          {data.map((feature: IFeature, i) => {
            return <Feature {...feature} key={i} />;
          })}
        </div>
      </div>
    </section>
  );
};
export default Features;
