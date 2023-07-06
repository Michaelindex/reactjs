import './App.css';
import { Component } from 'react';

class App extends Component{
  state = {
      name : 'Michael Dos Santos',
      counter : 0
    };

  handlePClick = () => {
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
      
    </div>
    );
  }
}

export default App;

