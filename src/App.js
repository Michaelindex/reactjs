import logo from './logo.svg';
import './App.css';
import { Component } from 'react';

class App extends Component{
  constructor(props) {
    super();
    this.handlePClick = this.handlePClick.bind(this);

    this.state = {
      name : 'Michael Dos Santos'
    };
  }

  handlePClick() {
    console.log("aaaa")
  }

  render() {
    //const name = this.state.name
    const { name } = this.state;

    
    return (
      <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p onClick={this.handlePClick()}>
          {name}
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
    );
  }
}

export default App;

