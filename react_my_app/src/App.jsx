import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  alert("Welcome to my webSite");
  const name={
    name:"BALAJI R",
    age:19
  };
  console.log("age="+name.age);
  return (
    <>
     <div class="text">
      <h1>Name : {name.name}</h1>
      <h1>Age : {name.age}</h1>
     </div>
    </>
  )
}

export default App
