import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Counter from './counter';
import Team from './Team';
import Users from './users';
import Friends from './friends';

function App() {
  function handleClick(){
    alert ('button Clicked');
  }

  return (
    <>
      <h3>React Concept</h3>
      <Friends></Friends>
      <Users></Users>
      <Team></Team>
      <Counter></Counter>

      <button onClick={handleClick}>Click Me</button>
    </>
  )
}

export default App
