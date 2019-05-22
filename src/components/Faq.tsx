import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleRight, faAngleDown } from '@fortawesome/free-solid-svg-icons';
import { IQuestion, IFaq } from '../models/Faq';

const Question = ({ isActive, answer, title, onClickFn, index }: IQuestion) => {
  return (
    <div className="card mb-3">
      <div className="card-header">
        <button aria-label={title} className={`card-title btn ${isActive ? '' : 'collapsed'}`} onClick={() => onClickFn(index)}>
          <span style={{ marginRight: '1rem' }}>
            <FontAwesomeIcon icon={isActive ? faAngleDown : faAngleRight} />
          </span>
          {title}
        </button>
      </div>
      <div className={`collapse ${isActive ? 'show' : ''}`}>
        <div className="card-body">{answer}</div>
      </div>
    </div>
  );
};

const Faq = (props: { id: string; data: IFaq[] }) => {
  const [state, setState] = useState({ activeIndex: 0 });
  const handleClick = (index: number) => {
    setState({ activeIndex: index });
  };
  return (
    <section id={props.id} className="section bg-6 edge bottom-right">
      <div className="container">
        <div className="row">
          <div className="col-md-4">
            <h2>
              Do you have <span className="bold">questions</span>
            </h2>
            <p className="lead">Not sure how this book can help you? Wonder why you need to buy PWA with Angular book?</p>
            <p>Here are the answers to some of the most common questions we hear from our appreciated customers</p>
          </div>
          <div className="col-md-8">
            <div className="accordion accordion-clean">
              {props.data.map((q, i) => {
                return <Question onClickFn={handleClick} index={i} {...q} isActive={i === state.activeIndex} key={i} />;
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default Faq;
