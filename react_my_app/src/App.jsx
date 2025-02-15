import './App.css'

function App() {
  alert("Welcome to my webSite");
  const name={
    name:"BALAJI R",
    age:19

  };
  console.log("age="+name.age);
  function first(){
    console.log("Good Morning");
  }
  const second = () => {
    console.log("Good Afternoon");
  };
  
  
  return (
    <>
     <div class="text">
      <h1>Name : {name.name}</h1>
      <h1>Age : {name.age}</h1>
     </div>
     <div>
     <button onClick={first}>Press 1</button>
     <button onClick={second}>Press 2</button>
     <button onClick={()=>console.log("Good Night")}>Press 3</button>
     </div>

    </>
  )
}

export default App
