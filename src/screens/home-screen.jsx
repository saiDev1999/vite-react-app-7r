import React, { useContext } from "react"
import UseEffectExample from "../components/hooks/useEffect/useEffectEx"
import NavBar from "../components/navbar/navbar"
import { UserDetails } from "../navigations/navigation-stack"
import withProfile from "../hoc/withProfile"
import withCounter from "../hoc/withCounter"






const HomeScreen=({count,incrementCount})=>{
    // console.log(profile.firstName)
    const{salary}=useContext(UserDetails)
    return(
        <>
         <h2>{count}</h2>
         <button onMouseOver={incrementCount} >Increment count</button>
        </>
    )
}

export default React.memo(withCounter(HomeScreen))