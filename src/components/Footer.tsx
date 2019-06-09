import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faRss } from '@fortawesome/free-solid-svg-icons';
import { faFacebookF, faTwitter, faInstagram, faLinkedinIn } from '@fortawesome/free-brands-svg-icons';

import NewsletterForm from './NewsletterForm';

const Footer = (props: { id: string; builtTime: string }) => {
  const year = props.builtTime.split('.')[2];
  return (
    <footer id={props.id} className="site-footer section text-center">
      <div className="container">
        <NewsletterForm />
        <nav className="nav social-icons justify-content-center mt-4">
          <a
            aria-label="Facebook"
            rel="noopener"
            target="_blank"
            href="https://www.facebook.com/webmax"
            className="mr-3 font-regular color-2"
          >
            <FontAwesomeIcon size="2x" icon={faFacebookF} />
          </a>
          <a aria-label="Twitter" rel="noopener" target="_blank" href="https://twitter.com/mhadaily" className="mr-3 font-regular color-2">
            <FontAwesomeIcon size="2x" icon={faTwitter} />
          </a>
          <a
            aria-label="Instagram"
            rel="noopener"
            target="_blank"
            href="https://www.instagram.com/webmaxru/?hl=en"
            className="mr-3 font-regular color-2"
          >
            <FontAwesomeIcon size="2x" icon={faInstagram} />
          </a>
          {/* <a aria-label="Rss" rel="noopener" target="_blank" href="#" className="mr-3 font-regular color-2">
            <FontAwesomeIcon size="2x" icon={faRss} />
          </a> */}
          <a
            aria-label="Linkedin"
            rel="noopener"
            target="_blank"
            href="https://www.linkedin.com/in/mhadaily/"
            className="font-regular color-2"
          >
            <FontAwesomeIcon size="2x" icon={faLinkedinIn} />
          </a>
        </nav>
        <p className="small copyright color-2">
          &copy; {year} by{' '}
          <a className="color-5" rel="noopener" target="_blank" href="https://www.majidhajian.com">
            Majid Hajian
          </a>
          . All rights reserved. <br />
          <a className="color-5" rel="noopener" target="_blank" href="https://www.pwawithangular.com">
            pwawithangular.com
          </a>{' '}
          <br />
          <span>Last build: {props.builtTime}</span>
        </p>
      </div>
    </footer>
  );
};
export default Footer;
