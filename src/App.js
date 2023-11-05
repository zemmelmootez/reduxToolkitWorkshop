import logo from './logo.svg';
import './App.css';
import { useDispatch, useSelector } from 'react-redux';
import { decrement, increment, incrementByNumber } from './redux/slices/counterSlice';
import { useRef } from 'react';

function App() {

  const {counter}=useSelector(state=>state.counterReducer)
  const dispatch=useDispatch()
  const inc=()=>{

      
      dispatch(increment())
  }
  const dec=()=>{
      dispatch(decrement())
  }
  const R1=useRef()
  return (
    <div className="App">
  
      <button onClick={inc}>+</button>
      <div>{counter}</div>
      <button onClick={dec}>-</button>
      <br></br>
      <input ref={R1} type='number'></input>
      <button onClick={()=>dispatch(incrementByNumber(parseInt(R1.current.value)))}>increment by number</button>


    </div>
  );
}

export default App;
