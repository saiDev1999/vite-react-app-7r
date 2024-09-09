import { useContext } from "react"
import NavBar from "../components/navbar/navbar"
import { GlobalCounter, UserDetails } from "../navigations/navigation-stack"
import UseReducerExample from "../components/hooks/useReducer/useReducer"



const AboutScreen=()=>{
    const {darkHandler,salaryHandler}=useContext(UserDetails)

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