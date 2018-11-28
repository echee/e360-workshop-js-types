import React, { Component } from 'react';
import QuestionList from './QuestionList';

const inspect = x => {
  console.log(x);
  return x;
};

class Trivia extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isFetching: false,
      results: [],
      quizStarted: false,
    };
  }

  getQuestions = () => {
    this.setState({ isFetching: true });

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

  render() {
    const { results, quizStarted, isFetching } = this.state;

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
                  <QuestionList questions={results} />
                </form>
              )}
            </div>
          </div>
        )}
      </>
    );
  }
}

export default Trivia;
