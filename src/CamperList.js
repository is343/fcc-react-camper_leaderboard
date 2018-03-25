import React, { Component } from 'react';
import './CamperList.css';
import Camper from './Camper';

const CamperList = (props) => {
  if(!props.desc){ // data provided in asc order
    props.userData.reverse();
  }
  const list = props.userData.map((user, index) => (
    <Camper key={index} user={user} rank={index}/>
    ));
  const {onWhichListClick, onSortClick} = props;
  return <table>
      <tr>
        <th>#</th>
        <th>Camper Name</th>
        <th>
          <span onClick={() => onWhichListClick(false) // not all time
            }>
            Points in past 30 days
          </span>
        </th>
        <th>
          <span onClick={() => onWhichListClick(true) // all time
            }>
            All time points
          </span>
        </th>
      </tr>
      {list}
    </table>;};


export default CamperList;


