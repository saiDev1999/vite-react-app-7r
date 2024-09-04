


import React from 'react'
import { Link, Outlet } from 'react-router-dom'

function CategoryScreen() {
  return (
    <div>

        <h2>CategoryScreen</h2>
        <Link to={"electronics"} >Electronics</Link>
        <Link to={"jewellery"} >jewellery</Link>
        <Outlet/>
    </div>
  )
}

export default CategoryScreen