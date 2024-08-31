import { useState } from "react"
import { mobileValidation } from "./validations"
import { indianStates } from "./info"
import TableComponent from "../../table/table"





const ControlledStateForm=()=>{

    const initialFormData={
        model:"",
        mobileNumber:"",
        state:""
    }
 

    const [formData,setFormData]=useState(initialFormData)

    const [formsErrors,setFormErrors]=useState({
        modelErr:"",
        mobileErr:""

    })

    const[submittedData,setSubmittedData]=useState([])






    const onSubmit=(event)=>{

    
        event.preventDefault()

        console.log(formData)

        setSubmittedData([...submittedData,formData])

        setFormData(initialFormData)


        // console.log(modelErr,mobileErr,"error check")


        // if(modelErr || mobileErr){
        //     alert("please fill properly")
        // }else{
        //     // Hit the server
        // }
    }


    const onChangeHandler=(event)=>{
        // const enteredValue=event.target.value
        // const targetedName=event.target.name

        const{name,value}=event.target


        console.log(name,value,"userinput")

        setFormData({...formData,[name]:value})
        // setFormData({...formData,[event.target.name]:event.target.value})


      

    }


    return(
        <>
        
        <form  onSubmit={onSubmit} >
  <div className="form-group">
    <h1>Samsung service form</h1>
    <label htmlFor="username">Enter device model</label>
    <input type="text" className="form-control" id="username" 

    name="model"
    
    value={formData.model}
    onChange={onChangeHandler}
    />

{formsErrors.modelErr && <span style={
        {color:"red"}
    } >{formsErrors.modelErr}</span> }






    <label htmlFor="username">Enter mobile number</label>
    <input type="text" className="form-control" id="username" 
    name="mobileNumber"
    
    value={formData.mobileNumber}
    onChange={onChangeHandler}
    />

{formsErrors.mobileErr && <span style={
        {color:"red"}
    } >{formsErrors.mobileErr}</span> }

    <select   value={formData.state} onChange={onChangeHandler} name="state"   >
        {
            indianStates.map(eachState=>{
                return(
                    <option value={eachState.name}  >{eachState.name}</option>   
                )
            })
        }
     
    </select>


  </div>

  


  <button type="submit" className="btn btn-default">
    Submit
  </button>
</form>


<TableComponent rowData={submittedData} />




        
        </>
    )
}

export default ControlledStateForm