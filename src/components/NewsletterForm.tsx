import React, { FormEvent, useState } from 'react';
import MailchimpSubscribe from 'react-mailchimp-subscribe';

const url = 'https://pwawithangular.us1.list-manage.com/subscribe/post?u=46d338ce82cd248525beb707e&amp;id=d47b6e6f64';

const NewsletterForm = (props: any) => {
  const [state, setState] = useState({ EMAIL: '', FULLNAME: '' });
  const handleChangeEmail = (event: any) => {
    setState({ ...state, EMAIL: event.target.value });
  };
  const handleChangeFullName = (event: any) => {
    setState({ ...state, FULLNAME: event.target.value });
  };

  const submit = (event: FormEvent, subscribe: any) => {
    event.preventDefault();
    // TODO: better validation
    subscribe(state);
  };
  return (
    <>
      <div className="font-md regular">Stay updated</div>
      <p className="color-2 mb-5">
        By registering with us you will receive all new features and updates right in your inbox! we will not spam you
      </p>
      <section className="section overflow-hidden">
        <div className="container pt-4 bring-to-front">
          <div className="row">
            <div className="col-md-10 mx-md-auto">
              <MailchimpSubscribe
                url={url}
                render={({ subscribe, status, message }) => {
                  const msg = message || 'Something is wrong!';
                  return (
                    <form
                      className="form"
                      onSubmit={event => {
                        submit(event, subscribe);
                      }}
                    >
                      <div className="mb-5">
                        We will use the information you provide on this form to be in touch with you and to provide you updates and latest
                        news and blogs. You can change your mind at any time by clicking the unsubscribe link in the footer of any email you
                        received from us or by contacing us. We will treat your information with respect. If you need more information
                        please contact us.
                      </div>
                      <label htmlFor="fullname" className="input-group-register py-4">
                        <input
                          id="fullname"
                          type="text"
                          name="FULLNAME"
                          className="form-control shadow-lg bg-1 form-control-rounded"
                          placeholder="Enter your full name"
                          value={state.FULLNAME}
                          onChange={handleChangeFullName}
                          required
                        />
                      </label>
                      <label htmlFor="email" className="input-group-register">
                        <input
                          id="email"
                          type="email"
                          name="EMAIL"
                          className="form-control shadow-lg bg-1 form-control-rounded"
                          placeholder="Enter your email"
                          value={state.EMAIL}
                          onChange={handleChangeEmail}
                          required
                        />
                        <button aria-label="Register" className="btn btn-rounded btn-3 btn-lg" type="submit">
                          Register me
                        </button>
                      </label>
                      <div className="mt-5">
                        {status === 'sending' && <div className="block color-4 bold">sending...</div>}
                        {status === 'error' && <div style={{ color: 'red' }} dangerouslySetInnerHTML={{ __html: msg }} />}
                        {status === 'success' && (
                          <div className="block color-3 bold">
                            One more step! Please go to your email and confirm your subscription by clicking on the link that we have sent
                            you. Thank you for subscribing to our newsletter.
                          </div>
                        )}
                      </div>
                    </form>
                  );
                }}
              />

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
