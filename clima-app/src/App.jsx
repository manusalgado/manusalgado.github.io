import React from 'react';
import Titles from './components/Titles';
import Form from './components/Form';
import Weater from './components/Weater';
import './App.css';


class App extends React.Component{

state = {
  gameState: undefined,
  currentPlayer: undefined,
  whiteCount: undefined,
  blackCount: undefined,
  boardRows: undefined
}
  getWeather = async (e) => {
    e.preventDefault();
    const api_call = await fetch(`http://35.163.129.163:9000/reversi/game?token=%20ca9b8123-bbdd-4fba-a0cd-60f83cd3b8a9`);
    const data = await api_call.json();
    console.log(data);
    this.setState({
      gameState: data.gameState,
      currentPlayer: data.currentPlayer,
      whiteCount: data.whiteCount,
      blackCount: data.blackCount,
      boardRows: data.boardRows
    });
  }

  render(){
    return (
      <div>
        <Titles />
        <Form getWeather={this.getWeather}/>
        <Weater
         gameState={this.state.gameState}
         currentPlayer={this.state.currentPlayer}
         whiteCount={this.state.whiteCount}
         blackCount={this.state.blackCount}
         boardRows={this.state.boardRows}
         />

      </div>
    );
  }
}

export default App;
