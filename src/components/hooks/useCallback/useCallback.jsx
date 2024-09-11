


import React, { useCallback, useState } from 'react'
import MainHeading from '../../heading/headings'
import CustomButton from '../../button/button'

function UseCallbackExample() {
    const[toggle,setToggle]=useState(false)

    const [age,setAge]= useState(10)


    const toggleHandler= useCallback(()=>{

        setToggle(!toggle)

    },[toggle])


    const ageHandler= useCallback(()=>{
        setAge(age+1)
    },[age])

  

 
  return (
    <div>
        {
            toggle ? <h2>Wellcome user</h2> : <h3>Please login</h3>
        }

      <MainHeading/>
      {/* <button onClick={toggleHandler} >Click toggle</button> */}

      <h2>Current age  {age}</h2>

      <CustomButton text={"Toggle"} onPress={toggleHandler}   />

      <CustomButton text={"Age"} onPress={ageHandler}   />


    </div>
  )
}

export default UseCallbackExample