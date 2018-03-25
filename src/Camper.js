import React, { Component } from 'react';
// import './CamperLeaderboard.css';

const iconStyle = {height: '25px'};

const Camper = (props) => {
  return(
      <tr>
        <th>{props.rank + 1}</th>
        <th><img style={iconStyle} src={props.user.img} alt={props.user.username}></img>{props.user.username}</th>
        <th>{props.user.recent}</th> 
        <th>{props.user.alltime}</th>
      </tr>
      
    )};

export default Camper;

      // <div>
      //   {user.username}
      // </div>