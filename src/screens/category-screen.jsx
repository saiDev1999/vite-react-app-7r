


import React, { useContext } from 'react'
import { Link, Outlet } from 'react-router-dom'
import { GlobalCounter } from '../navigations/navigation-stack'
import { incrementAction } from '../navigations/counterHelper'

function CategoryScreen() {

  const{dispatch}=useContext(GlobalCounter)

  const incrementHandler=()=>{
    dispatch(incrementAction)
  }
 

  return (
    <div>

        <h2>CategoryScreen</h2>
        <button onClick={incrementHandler} >Increment count value</button>
        <Link to={"electronics"} >Electronics</Link>
        <Link to={"jewellery"} >jewellery</Link>
        <Outlet/>
    </div>
  )
}

export default CategoryScreen