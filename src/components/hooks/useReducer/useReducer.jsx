
import React, { Fragment, useReducer, useState } from 'react'


const reducer=(state,action)=>{

    switch(action.type){
        case "INCREMENT_AGE":
            return {...state,age:state.age+action.payload}
        case "CHANGE_NAME":
            return {...state,username:action.payload}
        case "ADD_TODO":
            return {...state,todos:[...state.todos,action.payload]}

        default :
        return state

    }

}


function UseReducerExample() {
    const initialState={
        username: "raju",
        age :33,
        todos : ["woke up at 8am","Breakfast at 10am"],
        homeAdress:{}
        }

        const [currentState,dispatch]=useReducer(reducer,initialState)
        const[name,setName]=useState("")
        const [enteredTodo,setEnteredTodo]=useState("")

        const nameHandler=(event)=>{
            setName(event.target.value)
        }

        const todoHandler=(event)=>{
            setEnteredTodo(event.target.value)
        }


        const incrementAgeHandler=()=>{

            dispatch({
                type:"INCREMENT_AGE",
                payload:1
            })

        }

        const onSubmit=()=>{
            if(name){
                dispatch({
                    type:"CHANGE_NAME",
                    payload:name
                })

            }


         

        }

        const submitTodo=()=>{

            if(enteredTodo){
                dispatch({
                    type:"ADD_TODO",
                    payload:enteredTodo
                })
            }

            setEnteredTodo("")
           
        }
  
  return (
    <div>
        {/* <input type='text' value={name} onChange={nameHandler} />
        <button onClick={onSubmit} >Submit</button>

        <h1>{currentState.username}</h1>
        <h3>{currentState.age}</h3>
        <button onClick={incrementAgeHandler} >Increment age</button> */}


        <input type='text' onChange={todoHandler} value={enteredTodo} />
        <button onClick={submitTodo} >Add Todo</button>
        {
            currentState.todos.map(eachTodo=><Fragment>
                <h5>{eachTodo}</h5>
            
            </Fragment>)
        }

    </div>
  )
}

export default UseReducerExample
