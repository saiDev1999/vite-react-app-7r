import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { json } from 'react-router-dom'

export const ElectronicsScreen = () => {


    const [data,setData]=useState([])

  useEffect(()=>{

    fetchData()
  },[])


   const fetchData=async()=>{

    try{
    const response= await axios.get("https://fakestoreapi.com/products/category/electronics")

    if(response.status===200){
        setData(response.data)
    }
}catch(err){
    console.error(err)
}




   }
  return (
    <div>

        <h4>Wellcome to ElectronicsScreen </h4>

        {
            data.map(each=><>
            <pre>{JSON.stringify(each)}</pre>

            
            </>)

        }
    </div>
  )
}
