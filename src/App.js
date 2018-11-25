// @flow
import React, { Component } from 'react';
import NavBar from './components/NavBar';
import SearchForm from './components/SearchForm';
import Results from './components/Results';
import 'bulma/css/bulma.css';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <NavBar />
        <section class="section">
          <div class="container">
            <h1 class="title">Look up a movie</h1>
            <SearchForm />
          </div>
        </section>
        <Results />
      </div>
    );
  }
}

export default App;
