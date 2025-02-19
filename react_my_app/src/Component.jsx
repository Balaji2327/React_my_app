import React from 'react'
import './Component.css'
const Component = (props) => {
  return (
    <>
    <div id="container1">
      <h2>{props.name1}</h2>
      <h2>{props.age1}</h2>
      <h2>{props.hobby1}</h2>
      
    </div>
    <div id="container2">
      <h2>{props.name2}</h2>
      <h2>{props.age2}</h2>
      <h2>{props.hobby2}</h2>
     
    </div>
    </>
  )
}

export default Component