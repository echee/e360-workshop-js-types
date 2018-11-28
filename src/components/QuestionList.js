import React from 'react';
import OptionsList from './OptionsList';

const QuestionList = ({ questions }) => {
  return questions.map((question, id) => {
    return (
      <div key={`question${id}`} className="field">
        <label
          className="label"
          dangerouslySetInnerHTML={{ __html: question.question }}
        />
        <OptionsList
          qid={id}
          rightAnswer={question.correct_answer}
          options={[question.correct_answer, ...question.incorrect_answers]}
        />
      </div>
    );
  });
};
export default QuestionList;
