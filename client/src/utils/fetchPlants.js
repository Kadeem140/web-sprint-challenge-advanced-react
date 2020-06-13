import React from "react";
import axios from 'axios';

export default function fetchPlants(){
    axios.get(`http://localhost:3333/plants`)
      .then(res => {
        console.log('Plants response',res.data.plantsData)
        this.setState({
          plants : [res.data.plantsData]
        })
      })
      .catch(err => console.log(err))
  }