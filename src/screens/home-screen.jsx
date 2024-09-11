import React, { useContext } from "react"
import UseEffectExample from "../components/hooks/useEffect/useEffectEx"
import NavBar from "../components/navbar/navbar"
import { UserDetails } from "../navigations/navigation-stack"
import withProfile from "../hoc/withProfile"
import withCounter from "../hoc/withCounter"
import useAxios from "../components/hooks/customHooks/useAxios"






const HomeScreen=({count,incrementCount})=>{
   const[recipes,error,loading]=useAxios("https://dummyjson.com/recipes")
   console.log(recipes,"recipesrecipes");
    const{salary}=useContext(UserDetails)

    if(loading){
        return <h3>Please wait....</h3>
    }
    if(error){
        return <h2>{JSON.stringify(error)}</h2>
    }
    return(
        <>
         <h2>{count}</h2>
         <button onMouseOver={incrementCount} >Increment count</button>
        </>
    )
}

export default React.memo(withCounter(HomeScreen))