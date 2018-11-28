import React from 'react';

const WarningCard = () => (
  <div className="box">
    <article className="media">
      <div className="media-left">
        <figure className="image is-128x128">
          <img
            src="https://media.giphy.com/media/FmyCxAjnOP5Di/giphy.gif"
            alt=""
          />
        </figure>
      </div>
      <div className="media-content">
        <div className="content">
          <p>You haven't answered all the questions yet!</p>
        </div>
      </div>
    </article>
  </div>
);

export default WarningCard;
