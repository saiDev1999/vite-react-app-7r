
import CustomList from "./components/list/list.jsx"
import { CustomOrderedList } from "./components/list/list.jsx"
import Tulasi,{ SecondaryHeading as Ranjith } from "./components/heading/headings.jsx"
import CustomImage from "./components/image/image.jsx"




const App =()=>{
  return(
    < >

    <h4>Version 1</h4>
    <h4>Version 2</h4>


      <Tulasi/>
<Ranjith></Ranjith>
      <CustomImage/>
      <CustomImage/>
      <CustomImage/>

     
      <CustomList></CustomList>
    

      <CustomOrderedList/>
    </>
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