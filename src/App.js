import './App.css';
import { Component } from 'react';

class App extends Component{
  state = {
      name : 'Michael Dos Santos',
      counter : 0
    };

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

