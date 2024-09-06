useState - create and manage the data with in a component

useState + useContext - global state management

useReducer - create and manage the data with in a component , when our state relies on the complex logics

useReducer + useContext - global state management for complex logics in the state

ex :  
{
username: "raju",
age :33,
todos : ["woke up at 8am","Breakfast at 10am"],
homeAdress:{

}
}

useReducer syntax :

it accepts 2 args

1. reducerFunction
   2.initialState

it returns array, which contains 2 values 1. current state 2. dispatch function

const [currentState,dispatchFunction]=useReducer(reducerFunction,initialState)

reducerFunction : It is a pure function , it takes action and state as parameters and based on the action corresponding state will change

const reducer=(state,action)=>{
action === "INCREMENT_AGE" --- {...state,age:state.age+1}
action === "CHANGE_USERNAME" --- {...state,username:"new name"}
}

ex: Age -- > INCREMENT_AGE , DECREMENT_AGE

action : action is an object which tells what to happen to a state
action can contains properties
type is mandatory property
payload is optional

{
type : "INCREMENT_AGE",
payload: 2
}

dispatchFunction : To dispatch an action we must use dispatchFunction
which accepts the action

Tasks:

1. Repeat the class
2. CRUD using useReducer
3. useReducer + useContext global counter (https://www.geeksforgeeks.org/how-to-combine-usecontext-with-usereducer/)
4. when to use useReducer over useState
5. difference between useReducer over useState
6. deboucing and throatling
