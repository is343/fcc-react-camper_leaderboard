import React, { Component } from 'react';
import './CamperLeaderboard.css';
import ChartHeads from './ChartHeads';

const CamperLeaderboard = ({userData, desc}) => {
  return(
      <div>
        <header className="App-header">
          <h1 className="App-title">Leaderboard</h1>
        </header>
        <ChartHeads />
      </div>
    )};


export default CamperLeaderboard;


// const Response = ({answer, guessedCorrect, onNext}) => (
//     <div>
//       {guessedCorrect ? 
//         `Correct! : ${answer} ` :
//         `Incorrect! Correct answer is: ${answer} `}
//       <button type='submit' onClick={onNext}>Next</button>
//       </div>
// );

  
// export default Response;