import React from 'react';
import PurchaseButtons from './PurchaseButtons';

const CallToAction = (props: { id: string }) => {
  return (
    <section id={props.id} className="section">
      <div className="container bring-to-front">
        <div className="shadow rounded text-center bg-3-gradient color-1 p-5">
          <h2 className="mb-5">Learn from Progressive web app with Angular book now.</h2>
          <p className="handwritten highlight font-md">Why wait? Start now!</p>
          <div className="mt-5 align-items-center">
            <PurchaseButtons />
          </div>
        </div>
      </div>
    </section>
  );
};
export default CallToAction;
