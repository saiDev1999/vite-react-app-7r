import axios from 'axios'
import React, { useEffect, useState } from 'react'

export const JewelleryScreen = () => {
    const [data,setData]=useState([])

    useEffect(()=>{
  
      fetchData()
    },[])
  
  
     const fetchData=async()=>{
  
      try{
      const response= await axios.get("https://fakestoreapi.com/products/category/jewelery")
  
      if(response.status===200){
          setData(response.data)
      }
  }catch(err){
      console.error(err)
  }
  
  
  
  
     }
  return (
    <div>


        <h2>wellcome to jewellery screen </h2>
        {
            data.map(each=><>
            <pre>{JSON.stringify(each)}</pre>

            
            </>)

        }
    </div>
  )
}
