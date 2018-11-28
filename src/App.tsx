import React, { Component } from 'react';
import NavBar from './components/NavBar';
import Trivia from './components/Trivia';
import 'bulma/css/bulma.css';
import './App.css';

export interface Props {
  foo: string;
}

class App extends Component<Props> {
  render() {
    return (
      <div className="App">
        <NavBar />
        <section className="section">
          <div className="container">
            <h1 className="title">Ready to test your trivia knowledge?</h1>
            <Trivia />
          </div>
        </section>
      </div>
    );
  }
}

export default App;
