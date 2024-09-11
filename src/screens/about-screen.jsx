import { useContext } from "react"
import NavBar from "../components/navbar/navbar"
import { GlobalCounter, UserDetails } from "../navigations/navigation-stack"
import UseReducerExample from "../components/hooks/useReducer/useReducer"
import useAxios from "../components/hooks/customHooks/useAxios"



const AboutScreen=()=>{
    const {darkHandler,salaryHandler}=useContext(UserDetails)

    const[products,error,loading]=useAxios('https://dummyjson.com/products')
    console.log(products)

    const {currentState,dispatch}=useContext(GlobalCounter)
    console.log(currentState)

    const changeTheme=()=>{
        darkHandler()

    }
    return(
        <>
        {/* <NavBar/> */}
        
        <h2>Welcome to About Screen {currentState.count}</h2>
        <UseReducerExample/>
        <button onClick={changeTheme} >Change theme</button>

        <button onClick={salaryHandler} >Change salary</button>

    
        </>
    )
}

export default AboutScreen