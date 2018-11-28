import React from 'react';

const OptionsList = ({ responses, qid }) => {
  return (
    <div className="control">
      {responses.map((response, id) => (
        <label key={id} className="radio">
          <input type="radio" name={`question-${qid}`} />
          {response}
        </label>
      ))}
    </div>
  );
};

const QuestionList = ({ questions }) => {
  return questions.map((question, id) => {
    return (
      <div
        key={`question-${id}`}
        className="field"
      >
        <label
          className="label"
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
