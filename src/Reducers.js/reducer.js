import React from 'react';
//https://www.boredapi.com/api/activity
import { createStore } from 'redux';

export const initialState = 
  {
    activity: "Learn Javascript",
    type: "education",
    participants: 1,
    price: 0,
    link: "",
    key: "3469378",
    accessibility: 0.9
}

export const reducer = state => {
  return ({
    activity: state.activity,
    type: state.type,
    participants: state.participants,
  })
}