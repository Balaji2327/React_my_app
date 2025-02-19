import './App.css'
import Component from './Component';
import { useState } from 'react';

function App() {

  const [color,setColor]=useState(true)

  const switchColor=()=>{
    setColor(!color)
  }
  const name={
    name:"BALAJI R",
    age:19,
    hobby:"CRICKET"

  };
  const nameName={
    name:"BALU G",
    age:18,
    hobby:"HANDBALL"

  };
  
  
  
  return (
    <>
    <div id="main" className={color?"fs":"tp"}>
     <Component name1={name.name} age1={name.age} hobby1={name.hobby} name2={nameName.name} age2={nameName.age} hobby2={nameName.hobby}/>
     <button onClick={switchColor}>Switch Color</button>
    
    </div>
    </>
  )
}

export default App
