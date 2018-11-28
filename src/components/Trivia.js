// @flow
import React, { Component } from 'react';
import QuestionList from './QuestionList';
import ScoreCard from './ScoreCard';
import WarningCard from './WarningCard';

type Result = {
  category: string,
  type: 'multiple' | 'boolean',
  difficulty: 'easy' | 'medium' | 'hard',
  question: string,
  correct_answer: string,
  incorrect_answers: Array<string>,
};

type AnswerOptions = 'correct' | 'incorrect';
type Answers = Array<AnswerOptions>;

type State = {
  isFetching: boolean,
  results: Array<Result>,
  quizStarted: boolean,
  myAnswers: Answers,
};

type Props = {};

const inspect = x => {
  console.log(x);
  return x;
};

class Trivia extends Component<Props, State> {
  constructor(props: Props) {
    super(props);

    this.state = {
      isFetching: false,
      results: [],
      quizStarted: false,
      myAnswers: [],
    };
  }

  getQuestions = () => {
    this.setState({ isFetching: true, myAnswers: [] });

    const api = 'https://opentdb.com/api.php?amount=5';

    fetch(api)
      .then(resp => resp.json())
      .then(inspect)
      .then(data => {
        this.setState({
          isFetching: false,
          results: data.results,
          quizStarted: true,
        });
      })
      .catch(error => console.error('Error:', error));
  };

  calculateScore = (answers: Answers) => {
    let correctCount = 0;
    answers.forEach(answer => {
      correctCount = answer === 'correct' ? correctCount + 1 : correctCount;
    });
    return correctCount;
  };

  handleOptionChange = (id: number, value: AnswerOptions) => {
    let newState = Object.assign({}, this.state);
    let newAnswers = newState.myAnswers;
    newAnswers[id] = value;

    this.setState({ myAnswers: newAnswers });
  };

  render() {
    const { results, myAnswers, quizStarted, isFetching } = this.state;

    return (
      <>
        <button
          type="button"
          disabled={isFetching}
          className="button is-primary"
          onClick={this.getQuestions}>
          {isFetching ? 'Fetching your questions' : "Let's get quizical!"}
        </button>

        {quizStarted && (
          <div>
            <div>
              {results.length > 0 && (
                <form>
                  <QuestionList
                    questions={results}
                    myAnswers={myAnswers} // This is not needed. See if they pick it up as unused
                    handleOptionChange={this.handleOptionChange}
                  />
                </form>
              )}
            </div>
            {myAnswers.length === 5 ? (
              <ScoreCard score={this.calculateScore(myAnswers)} />
            ) : (
              <WarningCard />
            )}
          </div>
        )}
      </>
    );
  }
}

export default Trivia;
