import React from 'react';

const NewsletterForm = (props: any) => {
  return (
    <>
      <div className="font-md regular">Stay updated</div>
      <p className="color-2 mb-5">By registering with us you will receive right in your inbox all new features and updates</p>
      <section className="section overflow-hidden">
        <div className="container pt-4 bring-to-front">
          <div className="row">
            <div className="col-md-10 mx-md-auto">
              <form action="#" className="form">
                <div className="input-group-register py-4">
                  <input
                    id="subscribe"
                    type="email"
                    name="Subscribe[email]"
                    className="form-control shadow-lg bg-1 form-control-rounded"
                    placeholder="Enter your email"
                    required
                  />
                  <label htmlFor="subscribe" />
                  <button aria-label="Register" className="btn btn-rounded btn-3 btn-lg" type="submit">
                    Register
                  </button>
                </div>
              </form>
              <div className="response-message" style={{ display: 'none' }}>
                <i className="fas fa-envelope font-lg" />
                <p className="font-md m-0">Check your email</p>
                <p className="response">We sent you an email with a link to get started. You’ll be in your account in no time.</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
export default NewsletterForm;
