import axios from 'axios'
import React, { useContext, useEffect, useState } from 'react'
import { UserDetails } from '../navigations/navigation-stack'

export const JewelleryScreen = () => {

  const {username}=useContext(UserDetails)
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

 <h3>Wellcome {username}</h3>
        <h2>wellcome to jewellery screen </h2>
        {
            data.map(each=><>
            <pre>{JSON.stringify(each)}</pre>

            
            </>)

        }
    </div>
  )
}
