import './App.css'
import Component from './Component';

function App() {

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
     <Component name1={name.name} age1={name.age} hobby1={name.hobby} name2={nameName.name} age2={nameName.age} hobby2={nameName.hobby}/>
     <div id="text">
    <button onClick={()=>alert("Thanks for the Click")}>SINGLE CLICK</button>
    <button onDoubleClick={()=>alert("Thanks for the Double Click")}>DOUBLE CLICK</button>
    </div>
    </>
  )
}

export default App
