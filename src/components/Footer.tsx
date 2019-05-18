import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faRss } from '@fortawesome/free-solid-svg-icons';
import { faFacebookF, faTwitter, faInstagram, faLinkedinIn } from '@fortawesome/free-brands-svg-icons';

import NewsletterForm from './NewsletterForm';

const Footer = (props: { id: string; builtTime: string }) => {
  const year = props.builtTime.split('.')[2];
  return (
    <footer id={props.id} className="site-footer section text-center block bg-1">
      <div className="container py-4">
        <NewsletterForm />
        <hr className="mt-5" />
        <nav className="nav social-icons justify-content-center mt-4">
          <a href="#" className="mr-3 font-regular color-2">
            <FontAwesomeIcon icon={faFacebookF} />
          </a>
          <a href="#" className="mr-3 font-regular color-2">
            <FontAwesomeIcon icon={faTwitter} />
          </a>
          <a href="#" className="mr-3 font-regular color-2">
            <FontAwesomeIcon icon={faInstagram} />
          </a>
          <a href="#" className="mr-3 font-regular color-2">
            <FontAwesomeIcon icon={faRss} />
          </a>
          <a href="#" className="font-regular color-2">
            <FontAwesomeIcon icon={faLinkedinIn} />
          </a>
        </nav>
        <p className="small copyright color-2">
          &copy; {year} by <a href="https://www.majidhajian.com">Majid Hajian</a>. All rights reserved. <br />
          <a href="https://www.pwawithangular.com">pwawithangular.com</a> <br />
          <span>Last build: {props.builtTime}</span>
        </p>
      </div>
    </footer>
  );
};
export default Footer;
