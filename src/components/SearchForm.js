import React, { Component } from 'react';
import QuestionList from './QuestionList';

class SearchForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isFetching: false,
      results: [],
    };
  }
  getTrivia = () => {
    this.setState({ isFetching: true });
    const api = 'https://opentdb.com/api.php?amount=10';
    fetch(api)
      .then(resp => resp.json())
      .then(data => {
        this.setState({ isFetching: false, results: data.results });
      });
  };

  render() {
    return (
      <>
        <button
          type="button"
          disabled={this.state.isFetching}
          className="button is-link"
          onClick={this.getTrivia}>
          Quiz Me!
        </button>
        <div>
          {this.state.results.length > 0 && (
            <QuestionList questions={this.state.results} />
          )}
        </div>
      </>
    );
  }
}

export default SearchForm;
