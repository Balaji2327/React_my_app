import './App.css'
import { useState } from 'react';

function App() {

  const[regno,setRegno] = useState("")
  const[email,setEmail] = useState("")
  const[password,setPassword] = useState("")

 
  const fillForm = (e) => {
    e.preventDefault(); 
    alert("Form Filled");
  }
  
  
  return (
    <>

     <form onSubmit={fillForm} >
      <input type="text"id="regno" placeholder='Enter your RegNo' required value={regno} onChange={(e)=>setRegno(e.target.value)}/>
      <input type="text"id="email" placeholder='Enter your Email ID' required value={email} onChange={(e)=>setEmail(e.target.value)}/>
      <input type="password"id="password" placeholder='Enter your password' required value={password} onChange={(e)=>setPassword(e.target.value)}/>
      <button type="submit">SUBMIT</button>
      </form>
    </>
  )
}

export default App
