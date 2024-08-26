import { Component } from "react";
import CustomRectangleCard from "../bootstrap/custom-card";
import { Button } from "react-bootstrap";
import { sucessToasts } from "../toasts/toast-helpers";
import { ToastContainer, toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';




class CardAddition extends Component{

    state={
        employeeData:[{name:"Tulasi",salary:10000,role:"Angular dev"},{name:"ranjith",salary:20000,role:"React dev"}]
    }

    clickHandler=()=>{
        const newData={name:"Mukesh",role:"Next js dev",salary:2000}
        toast("Wow so easy!");

        const updatedData=[...this.state.employeeData,newData]
   

  this.setState({
    employeeData:updatedData
  },()=>{



    setTimeout(() => {

        toast("hello", {
            autoClose: false,
            
          })
    }, 1000);






  
  })




    }

    componentDidUpdate(){


    }

    removeHandler=(index)=>{

        console.log(index)
        const filteredData=this.state.employeeData.filter((_,id)=>id!==index)
        this.setState({
            employeeData:filteredData
        })
    }
    render(){
        return(
            <>
        <Button variant="primary"  onClick={this.clickHandler} >Add card</Button>
        <div className="container mt-5">
        <div className="row">

        {
            this.state.employeeData.length>0?
            this.state.employeeData.map((eachEmployee,index)=>{
                return(
          

      <div className="col-sm-4">
        <CustomRectangleCard title={eachEmployee.name}  ind={index} text={eachEmployee.role}   removeHandler={this.removeHandler} />
        

      
     
    </div>


                )
            })
            :
            <h3>No data found</h3>
        }
              </div>
          </div>
            
            
          <ToastContainer />
            </>
        )
    }
}

export default CardAddition