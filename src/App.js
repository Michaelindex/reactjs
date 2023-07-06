import logo from './logo.svg';
import './App.css';
import { Component } from 'react';

class App extends Component{
  constructor(props) {
    super();
    this.handlePClick = this.handlePClick.bind(this);

    this.state = {
      name : 'Michael Dos Santos',
      counter : 0
    };
  }

  handlePClick() {
    this.setState({ name: 'Junior'});
  }

  handleAClick = (event) => {
    event.preventDefault();
    const {counter} = this.state;
    this.setState({ counter: counter + 1});
  }

  render() {
    //const name = this.state.name
    const { name, counter } = this.state;

    
    return (
      <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p onClick={this.handlePClick}>
          {name} {counter}
        </p>
        <a 
          onClick={this.handleAClick}
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Aqui é o link
        </a>
      </header>
    </div>
    );
  }
}

export default App;

