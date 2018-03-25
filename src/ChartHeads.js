import React, { Component } from 'react';
import './ChartHeads.css';
import CamperList from './CamperList';

class ChartHeads extends Component {
  constructor(props){
    super(props);
    
    this.state = {
      userData: [],
      desc: true, // asc = false
      allTime: true
    };
    this.fetchData =  this.fetchData.bind(this);
    this.isAllTime =  this.isAllTime.bind(this);
    this.isAscending =  this.isAscending.bind(this);
  }
  
  fetchData(allTime){
    let url = 'https://fcctop100.herokuapp.com/api/fccusers/top/recent';
    if(allTime){
      url = 'https://fcctop100.herokuapp.com/api/fccusers/top/alltime';
    }
    fetch(url)
      // .then(request => {
      //   if(!request.ok){
      //     throw Error(request.status)
      //   }
      // })
      .then(resp => resp.json()) // convert our data to json
      .then(userData => {
        // const data = userData;
        console.log(userData);
        console.log(typeof(userData));
        // console.log(typeof(data));
        this.setState({
          userData,
          allTime
        });
      }) // 
      // .then(countries => console.log(typeof(countires),countries)) // 
      .catch(console.warn);
  }
  
  isAllTime(status){
    this.fetchData(status);
  }
  
  isAscending(){
    let reversedData = this.state.userData.reverse();
    this.setState({
      desc: (!this.state.desc) // USING OLD STATE, SO NEED TO FIX THIS
    });
  }
  
  componentDidMount(){
    this.fetchData(this.state.allTime);
  }
  
  render() {
    const {userData, desc} = this.state;
    let loading = <div>Loading...</div>;
    if(userData && userData.length >0){
      loading = <CamperList 
                  userData={userData} 
                  desc={desc}
                  onWhichListClick={this.isAllTime} 
                  onSortClick={this.isAscending} 
                />;
    }
    return (
      <div >
        {loading}
      </div>
    );
  }
}

export default ChartHeads;
