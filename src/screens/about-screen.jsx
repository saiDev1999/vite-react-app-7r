import { useContext } from "react"
import NavBar from "../components/navbar/navbar"
import { UserDetails } from "../navigations/navigation-stack"
import UseReducerExample from "../components/hooks/useReducer/useReducer"



const AboutScreen=()=>{
    const {darkHandler,salaryHandler}=useContext(UserDetails)

    const changeTheme=()=>{
        darkHandler()

    }
    return(
        <>
        {/* <NavBar/> */}
        
        <h2>Welcome to About Screen</h2>
        <UseReducerExample/>
        <button onClick={changeTheme} >Change theme</button>

        <button onClick={salaryHandler} >Change salary</button>

    
        </>
    )
}

export default AboutScreen