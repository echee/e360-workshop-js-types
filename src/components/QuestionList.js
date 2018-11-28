import React from 'react';

const OptionsList = ({ responses, qid }) => {
  return (
    <div className="control">
      {responses.map((response, id) => (
        <>
          <input type="radio" name={`question-${qid}`} />{' '}
          <label
            className="radio"
            for={`question-${qid}`}
            dangerouslySetInnerHTML={{ __html: response }}
          />{' '}
        </>
      ))}
    </div>
  );
};

const QuestionList = ({ questions }) => {
  return questions.map((question, id) => {
    return (
      <div className="field">
        <label
          className="label"
          key={`question-${id}`}
          dangerouslySetInnerHTML={{ __html: question.question }}
        />
        {/* {question.type === 'multiple' && ( */}
        <OptionsList
          qid={`question-${id}`}
          responses={[question.correct_answer, ...question.incorrect_answers]}
        />
        {/* )} */}
      </div>
    );
  });
};
export default QuestionList;
