import React from 'react';

const MultipleChoiceList = ({ responses, qid }) => {
  console.log(responses, qid);
  return (
    <div className="control">
      {responses.map((response, id) => (
        <label className="radio">
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
      <div className="field">
        <label
          className="label"
          key={`question-${id}`}
          dangerouslySetInnerHTML={{ __html: question.question }}
        />
        {question.type === 'multiple' && (
          <MultipleChoiceList
            qid={`question-${id}`}
            responses={[question.correct_answer, ...question.incorrect_answers]}
          />
        )}
      </div>
    );
  });
};
export default QuestionList;
