import { useEffect, useRef, useState } from "react"



const UseEffectExample3=()=>{
    const[salary,setSalary]=useState(10000)
    const salaryRef=useRef(0)



    useEffect(()=>{
        console.log("useEffect  trigerring..")

        salaryRef.current=salary
        
    },[salary])

    const salaryHandler=()=>{
        setSalary(salary+1000)
    }
    return(
        <>
        <h3> current state {salary}</h3>
        <h5> previous reference state {salaryRef.current}</h5>
        <button onClick={salaryHandler} >Increase salary</button>
        
        </>
    )
}

export default UseEffectExample3