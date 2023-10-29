import React from "react";
import "./App.css";
import { useDispatch, useSelector } from "react-redux";
import {incNumber,decNumber} from './action/index';

function App() {
  const myState = useSelector((state)=> state.changeTheNumber)
  const dispatch = useDispatch();
  return (
    <>
      <div className="container">
        <h1>Increament/Decrement Ccounter</h1>
        <h4>using React and Redux</h4>
        <div>
          <a title="Decrement" onClick={()=> dispatch(decNumber())}>
            <span>-</span>
          </a>
          <input type="text" name="quantity" value = {myState} />
          <a title="Increment"
          onClick={()=> dispatch(incNumber())}>
            <span>+</span>
          </a>
        </div>
      </div>
    </>
  );
}

export default App;
