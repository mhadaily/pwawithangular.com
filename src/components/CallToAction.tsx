import React from 'react';

const CallToAction = (props: { id: string }) => {
  return (
    <section id={props.id} className="section">
      <div className="container bring-to-front">
        <div className="shadow rounded text-center bg-3-gradient color-1 p-5">
          <h2 className="mb-5">Learn from Progressive web app with Angular book now.</h2>
          <p className="handwritten highlight font-md">Why wait? Start now!</p>
          <a href="signup.html" className="btn btn-5 btn-rounded mt-4">
            Order Here!
          </a>
        </div>
      </div>
    </section>
  );
};
export default CallToAction;
