// @noflow
import React from 'react';

const OptionsList = ({ options, qid, rightAnswer, handleOptionChange }) => (
  <div className="control">
    {options.map((response, aid) => (
      // Ignore this key hack. I needed something unique
      <div key={response}>
        <input
          type="radio"
          name={`question${qid}`}
          id={`question${qid}-answer${aid}`}
          value={response}
          onChange={e => {
            handleOptionChange(
              qid,
              e.target.value === rightAnswer ? 'correct' : 'incorrect',
            );
          }}
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
