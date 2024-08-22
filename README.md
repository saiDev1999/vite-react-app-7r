2013 - 2018 :
Functional(dynamic layer) layer -- Class components - StateFull components
U
}I layer -- Functional components : - StateLess components

After 2018 :
React version update : 16.8 -- Hooks were introduced in funtional components

Functional(dynamic) layer + UI layer -- Functional components -- StateFull components

do we need Class components and do we need learn Class components ?

1. Legacy projects were running Class components
2. For learning core concepts of components (Interviews)

React team suggesting to use Functional components , They don't have idea to remove class components

Class components :

syntax :
import {Component} from "react"

class Greeting extends Component{

    render(){
        return(
            <h1>Hello</h1>
        )
    }

const Greeting=()=><h1>Hello</h1>

ex : Youtube button

subscribe -- Initial state or data
subscribed -- when user performed click event - data needs to change

React State :

React state is an object which holds the information or data of a particular component
React State is a private to a component
State is mutable

State is applicable for both class components nd functional components

How to create a state in class components?
There are 2 ways to create a state in class components

1. Object way of creation
2. Contructor way

To access the state in class components , we need to use this.state.property
To attach the event in class components, we need to use this.methodNamee

Mutuate the state :
To mutuate the state in class components, we need to use this.setState method
note: Only way to change the state is by this.setState

setState method syntax :
it will accept 2 args , 1. Object or function 2. Function

this.setState({
// state changes here
},()=>{
// To check the latest state changes
})

note : State changes are asynchronous
note : when we use setState method, component will re-render (re-executed) to show updated changes

room - component
books - state

puzzle :

A --- B

one boat
boat can have 2

3 snakes , 3 cats

conditions :

1. if snake count is more , snake will kill cat

Tasks :

1. Repeat the class
2. What is meant by re-render of a component ?
3. How can we pass data from child to parent ?
4. Give a button, when we click on button , add new cards , delete cards
5. Uplifting of state in react
6. solve the snake and cat puzzle
