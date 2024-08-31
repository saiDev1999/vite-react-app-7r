import { useState } from "react"
import { mobileValidation } from "./validations"





const ControlledForm=()=>{
    const[model,setModel]=useState("")

    const[mobileNumber,setMobileNumber]=useState("")

    const [modelErr,setModelErr]=useState("")

    const[mobileErr,setMobileErr]=useState("")



    const modelHandler=(event)=>{

        const modelName=event.target.value

        setModel(modelName)
        const error=modelvalidator(modelName)
        console.log(error,"model name error")


        if(error){
            setModelErr(error)
        }else{
            setModelErr("")
        }

        console.log(modelName)

    }

    const modelvalidator=(value)=>{
  let error=""

  const modelRegex=/^samsung/i

  if(!value){
    error="Please enter model name"
  }else if(!modelRegex.test(value)){
    error="Please enter proper samsung model"
  }

  return error


    }

    const onSubmit=(event)=>{
        event.preventDefault()


        console.log(modelErr,mobileErr,"error check")


        if(modelErr || mobileErr){
            alert("please fill properly")
        }else{
            // Hit the server
        }
    }


    const mobileHandler=(event)=>{

        const mobile=event.target.value

        // console.log(typeof(mobile))
        setMobileNumber(mobile)
        const error=mobileValidation(mobile)
        console.log(error,"errorerror");
        if(error){
            setMobileErr(error)

        }else{
            setMobileErr("")
        }


    }

    return(
        <>
        
        <form  onSubmit={onSubmit} >
  <div className="form-group">
    <h1>Samsung service form</h1>
    <label htmlFor="username">Enter device model</label>
    <input type="text" className="form-control" id="username" 
    
    value={model}
    onChange={modelHandler}
    />

    {modelErr && <span style={
        {color:"red"}
    } >{modelErr}</span> }



    <label htmlFor="username">Enter mobile number</label>
    <input type="text" className="form-control" id="username" 
    
    value={mobileNumber}
    onChange={mobileHandler}
    />

{mobileErr && <span style={
        {color:"red"}
    } >{mobileErr}</span> }
    

  </div>

  


  <button type="submit" className="btn btn-default">
    Submit
  </button>
</form>
        
        </>
    )
}

export default ControlledForm