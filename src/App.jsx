
import CustomList from "./components/list/list.jsx"
import { CustomOrderedList } from "./components/list/list.jsx"
import Tulasi,{ SecondaryHeading as Ranjith, SecondaryHeading } from "./components/heading/headings.jsx"
import CustomImage from "./components/image/image.jsx"
import CustomButton from "./components/button/button.jsx"
import MainHeading from "./components/heading/headings.jsx"
import { recipeData } from "./data/recipeData.js"
import Greeting from "./components/greeting/greeting.jsx"
import React from "react"




const App =()=>{

  const imageListing=[
    {
      name:"bag1",
      src:"https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg",
      width:100,
      height:200,
    
    },
    {
      name:"bag2",
      src:"https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg",
      width:200,
      height:200
    },
    {
      name:"bag2",
      src:"https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg",
      width:200,
      height:200
    },
    {
      name:"bag2",
      src:"https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg",
      width:200,
      height:200
    }
  ]

  const clickedMe=(eachPerson={name:"random",role:"none"})=>{

    fetch("https://fakestoreapi.com/products")
    .then(response=>response.json())
    .then(final=>console.log(final))
    // const {name}=eachPerson
    // alert(`i am clicked, my name is ${name}`)
  }
  return(
    < >


    {
      [{name:"Tulasi",role:"Software developer"},{name:"sive",role:"Mern developer"},{
        name:"Raju",
        role:"Angular developer"
      }].map(eachPerson=>{
        const {role,name}=eachPerson
        return (
          <React.Fragment key={name}>

          <Greeting  text={`I am ${role}`}>{name}</Greeting>
          <CustomButton  text="click me" bgColor="yellow" onPress={()=>clickedMe(eachPerson)} ></CustomButton>
          </React.Fragment>
        )
      })
    }
    
  {/* {
    recipeData.map(eachRecipe=>{
      return(
        <div key={eachRecipe.id} >
          <MainHeading heading={eachRecipe.name}>

          <SecondaryHeading heading={"ingredients required"}  />

          </MainHeading>



          <CustomImage source={eachRecipe.image} width={200}  height={200}/>
          <SecondaryHeading heading={"ingredients required"}  />
          <CustomList list={eachRecipe.ingredients}  />
          <SecondaryHeading heading={"instructions required"}  />
          <CustomList list={eachRecipe.instructions}  />
          <CustomButton  text={"Start preparation"}   />
        </div>
      )
    })

  } */}

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