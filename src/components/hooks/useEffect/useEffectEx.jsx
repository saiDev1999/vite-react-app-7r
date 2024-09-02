import axios from "axios"
import { useEffect, useState } from "react"





const UseEffectExample=()=>{

    const [data,setData]=useState([])

    const [type,setType]=useState("products")

    const [age,setAge]=useState(0)

    useEffect(()=>{
        console.log("useEffect rendering...")

        document.title=`Current age ${age}`
        fetchData()
    },[type,age])

   


    const fetchData=async()=>{
        try{



        const {data,status}= await axios.get(`https://fakestoreapi.com/${type}`)
        if(status==200){
            console.log(data)
            //
            setData(data)
        }
    }catch(err){
        console.error(err)
    }

    }


    const changeTypeHandler=(each)=>{
        setType(each)

    }


    const ageHandler=()=>{
        setAge(age+1)
    }

    return(
        <>
        <h3>Use effect examples</h3>

        <button onClick={ageHandler} >increment age</button>

        {
            ["products","carts","users"].map(each=> <button onClick={()=>changeTypeHandler(each)} >{each}</button>)
        }
  
        <h5>{type}</h5>

        {
            data.map(each=><>
            
<pre>{JSON.stringify(each)}</pre>

            </>)
        }

        </>
    )

}

export default UseEffectExample