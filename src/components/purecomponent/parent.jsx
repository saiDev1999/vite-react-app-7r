import { Component } from "react";
import ChildComponent from "./child";
import ChildComponent1 from "./child";


class ParentComponent extends Component{

    constructor(){
        super()
        this.state={
            isIndian:false
        }
    }


    changeCountryship=()=>{
        this.setState({
            isIndian:!this.state.isIndian
        })
    }


    render(){
        console.log("parent re-rendering....")
        const{isIndian}=this.state
        return(
            <>
            <h3>Hello component</h3>

            <h3>{isIndian?"Happy republic day":"Go back India"}</h3>
            <button onClick={()=>this.changeCountryship()} >Change countryship</button>
            <ChildComponent1/>
            </>
        )
    }
}


export default ParentComponent

