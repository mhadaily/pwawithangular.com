import React from 'react';
import config from '../../config/SiteConfig';

const PurchaseButtons = () => {
  return (
    <>
      <a
        rel="noopener"
        href={config.Amazon_Link}
        target="_blank"
        className="btn btn-rounded btn-lg btn-5 my-2 shadow mr-3 px-4 text-capitalize"
      >
        Order on Amazon
      </a>
      <a
        rel="noopener"
        href={config.Apress_Link}
        target="_blank"
        className="btn btn-rounded btn-lg btn-5 my-2 shadow mr-3 px-4 text-capitalize"
      >
        Order on Apress
      </a>
    </>
  );
};

export default PurchaseButtons;
