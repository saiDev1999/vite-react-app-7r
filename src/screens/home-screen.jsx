import { useContext } from "react"
import UseEffectExample from "../components/hooks/useEffect/useEffectEx"
import NavBar from "../components/navbar/navbar"
import { UserDetails } from "../navigations/navigation-stack"






const HomeScreen=()=>{
    const{salary}=useContext(UserDetails)
    return(
        <>
        {/* <NavBar/> */}
        
        <h2>Welcome to home screen {salary}</h2>

        <UseEffectExample/>

        </>
    )
}

export default HomeScreen