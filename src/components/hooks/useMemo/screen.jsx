import React from 'react'
import "./style.css"

function Screen({age,ageEvenChecker,salary,setSalaryHandler,setAgeHandler}) {
  return (
 <>
 
 <h2>{age} {ageEvenChecker}</h2>
    <h2>{salary}</h2>

    <button onClick={setSalaryHandler} >Increase salary</button>
    <button onClick={setAgeHandler} >Increase Age</button>
 </>
  )
}

export default Screen