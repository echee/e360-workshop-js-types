import React from 'react';

const ScoreCard = ({ score }) => (
  <div className="box">
    <article className="media">
      <div className="media-left">
        <figure className="image is-128x128">
          <img
            src="https://media.giphy.com/media/cP55v5tM8ZpKw/giphy.gif"
            alt=""
          />
        </figure>
      </div>
      <div className="media-content">
        <div className="content">
          <p>
            Your score is <span>{score}/5!</span>
          </p>
        </div>
      </div>
    </article>
  </div>
);

export default ScoreCard;
