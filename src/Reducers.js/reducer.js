import React from 'react';
//https://www.boredapi.com/api/activity
import { createStore } from 'redux';
import { NEW_TASK } from '../actions/actions';
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
export const reducer = (state = initialState, action) => {
  switch(action.type){
  case NEW_TASK:
    console.log('this is fetch task')
    return ({
    activity: state.activity,
    type: state.type,
    participants: state.participants,
  })
  default: return state
}
}