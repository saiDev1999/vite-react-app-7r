

import React from "react"
import LoginComponent from "./components/chilProp/login"
import MainHeading from "./components/heading/headings"
import CustomButton from "./components/button/button"
import Greeting from "./components/greeting/greeting"
import style from "./components/greeting/greeting.module.css"
import CustomRectangleCard from "./components/bootstrap/custom-card"
import { employeeDetails } from "./data/employeeData"
import FirstComponent from "./components/bootstrap/first-component"
import YoutubeButton from "./components/class/youtube-button"
import RecipeList from "./components/recipeListing/recipeList"
import Mounting from "./components/lifeCycle/mounting"
import ParentComponent from "./components/purecomponent/parent"
import Counter from "./components/hooks/useState/counter"
import CustomTodo from "./components/hooks/useState/todo"
import UseRefExample from "./components/hooks/useRef/useRefEx"
import UncontrolledComponent from "./components/hooks/uncontrolled/uncontrolled-form"
import ControlledForm from "./components/hooks/controlled/controlled"
import ControlledStateForm from "./components/hooks/controlled/controlledState"
import RecipeComponent from "./components/recipes/recipe"

// import "./App.css"


// const App =()=>{
//   const type="USER1"

//   switch(type){
//     case "ADMIN":
//       return <LoginComponent text="Admin" />
//     case "USER":
//       return <LoginComponent text="User" />
//   case "GUEST":
//     return <LoginComponent text="Guest" />
//       default :
//       return <LoginComponent/>
//   }


  
// }
const App =()=>{
  return(
    <div>

      <RecipeComponent/>

<ControlledStateForm/>

      
  
    </div>
  )
}

export default App








// Component : Component is a reusable bits of code which creates User interfaces
// 2. types:

// 1. functional components
// 2. class components 

// every Component will return html type of code called as jsx 
// Every component must start capital letter 
// Component can be as small as button and as large as screen 
// Nesting of components can be done to form the entire application 

// Every component which is there in a file that returns markup will have .jsx extension

// every file can contains as many components 

// note : React always recommeds to use functional component instead of class components 


// JSX : JSX stands for javascript and xml , its a extension for javascript language  

// Every component will return JSX


// Because of jsx we can write both js and html content in a one file 


// Rules of JSX :
// 1. Every component must return the single parent , And that parent be shared container (div,span,section,ul)
// (React Fragments -> <></>)

// React Fragments are the empty sharable containers , it Doesnt create extra nodes in the dom 
// 2. every attribute must be camelCase  ex : onClick,onMouseOver
// 3. Every javascript code must be written inside the curly braces (inside the return)
// 4. class must be replaced with className  () (class is predefined keyword in react to create class components)


// Topics:
// 1. App creation using vite tool 
// 2. Component creation and nesting of components (UI)
// 3. JSX and Rules of JSX
// 4. React Fragments


// Tasks :
// 1. Reapeat the class 
// 2. First component in react.dev (https://react.dev/learn/your-first-component)
// 3. Writing markup with jsx (https://react.dev/learn/writing-markup-with-jsx)
// 4. Creating table component, Card components
// 5. Can we write react code without jsx ? ex: React.createElement