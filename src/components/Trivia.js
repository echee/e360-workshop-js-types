import React, { Component } from 'react';

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
        });
      })
      .catch(error => console.error('Error:', error));
  };

  render() {
    const { isFetching } = this.state;

    return (
      <button
        type="button"
        disabled={isFetching}
        className="button is-primary"
        onClick={this.getQuestions}>
        {isFetching ? 'Fetching your questions' : "Let's get quizical!"}
      </button>
    );
  }
}

export default Trivia;
