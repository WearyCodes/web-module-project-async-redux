import React from 'react';
import './App.css';
import TodoElement from './TodoElement';
//https://www.boredapi.com/api/activity
import { createStore } from 'redux';
import { initialState, reducer } from './Reducers.js/reducer';
import { Provider, connect } from 'react-redux';


const store = createStore(reducer, initialState)



function App() {
  return (
    <Provider store = {store}>
    <div className="App">
      <TodoElement/>
    </div>
    </Provider>
  );
}


export default (App);