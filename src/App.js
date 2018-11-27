// @flow
import React, { Component } from 'react';
import NavBar from './components/NavBar';
import SearchForm from './components/SearchForm';
import 'bulma/css/bulma.css';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <NavBar />
        <section className="section">
          <div className="container">
            <h1 className="title">Ready to test your trivial knowledge?</h1>
            <SearchForm />
          </div>
        </section>
      </div>
    );
  }
}

export default App;
