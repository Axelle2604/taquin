import React, { PureComponent } from 'react';
import './App.css';
import Taquin from './components/Taquin';

class App extends PureComponent {
  state = {
    isWin: false,
  };

  setGameIsWon = () => {
    this.setState({ isWin: true });
  };

  render() {
    return (
      <div className="App">
        <Taquin setGameIsWon={this.setGameIsWon} />
      </div>
    );
  }
}

export default App;
