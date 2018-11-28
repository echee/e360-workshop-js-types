import React from 'react';

const OptionsList = ({ options, qid, rightAnswer }) => (
  <div className="control">
    {options.map((response, aid) => (
      // Ignore this key hack. I needed something unique
      <div key={response}>
        <input
          type="radio"
          name={`question${qid}`}
          id={`question${qid}-answer${aid}`}
          value={response}
        />{' '}
        <label
          className="radio"
          htmlFor={`question${qid}-answer${aid}`}
          dangerouslySetInnerHTML={{ __html: response }} // Doing this as a dirty solution to decoding the string
        />
      </div>
    ))}
  </div>
);

export default OptionsList;
