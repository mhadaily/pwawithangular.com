import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { IFeature } from '../models/Feature';

const WorkBoxLogo = () => (
  <svg viewBox="0 0 174 150" className="svg-inline--fa fa-chrome fa-w-16 fa-3x color-1 icon center-xy">
    <g stroke="none">
      <g id="workbox-logo" fill="#FFFFFF" fillRule="nonzero">
        <polygon
          id="Path"
          points="50.1 113 42.2 110.6 41.8 15 23.6 23.7 22.6 105 16.1 103 15.6 27.5 0 35 0 115 71.7 149.5 71.7 0.5 50.9 10.5"
        />
        <g id="Group" transform="translate(80.000000, 3.000000)">
          <path d="M0.7,0.3 L0.7,67.1 L93.2,68.7 L93.2,28.8 L0.7,0.3 Z M21.4,33.3 L78.1,44.2 L78.1,50.6 L21.4,43.6 L21.4,33.3 L21.4,33.3 Z" />
          <path d="M0.7,76.9 L0.7,143.8 L93.2,115.2 L93.2,75.3 L0.7,76.9 Z M21.4,99.9 L78.1,93.3 L78.1,99.7 L21.4,110.2 L21.4,99.9 L21.4,99.9 Z" />
        </g>
      </g>
    </g>
  </svg>
);

const FeatureSvgBg = (props: { index: number }) => (
  <svg viewBox="0 0 276.1 281.01" className="shape shape-xxl drop-shadow">
    <path
      d="M261.95 86.82a83.45 83.45 0 0 0-8.57-10.71s-50.84-57.89-137-73.9A92.94 92.94 0 0 0 5 77.21c-17.58 85.56 16.63 154.31 16.83 154.72a83.17 83.17 0 0 0 6.67 11.93c21.11 31.38 60.18 43.83 96.07 33.7 0 0 58.12-14.28 123.33-79 30.86-29.56 37.68-76.61 14.05-111.74z"
      fill="url(#linear-gradient)"
      opacity={0.8}
    />
  </svg>
);

const Feature = (props: IFeature) => {
  const { title, description, index, icon } = props;
  return (
    <div className="col-md-4 py-4 rounded shadow-hover text-center">
      <div className="icon-shape mb-4">
        <FeatureSvgBg index={index} />
        {icon ? <FontAwesomeIcon icon={icon} size="3x" className="color-1 icon center-xy" /> : <WorkBoxLogo />}
      </div>
      <div className="bold text-capitalize pb-4">{title}</div>
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
          <div className="bold small text-uppercase pb-4">{subtitle}</div>
          <h2>{title}</h2>
        </div>
        <div className="row gap-y text-center text-md-left">
          <svg height="0" viewBox="0 0 276.1 281.01" className="shape shape-xxl drop-shadow">
            <defs>
              <linearGradient id="linear-gradient" y1="140.5" x2="276.1" y2="140.5" gradientUnits="userSpaceOnUse">
                <stop offset="0" stopColor="#9c27b0" />
                <stop offset="1" stopColor="#7b20a2" />
              </linearGradient>
            </defs>
          </svg>
          {data.map((feature: IFeature, i) => {
            const newProps = { ...feature, index: i };
            return <Feature {...newProps} key={i} />;
          })}
        </div>
      </div>
    </section>
  );
};
export default Features;
