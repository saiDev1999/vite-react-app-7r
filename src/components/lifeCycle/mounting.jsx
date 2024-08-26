import { Component } from "react";
import Child from "./child";




class Mounting extends Component{

    constructor(){

        console.log("constructor executed....")

        super()


        this.state={
            products:[],
            message:"hello world",
            favouriteColor:"green",
            count:100,
            childIsVisible:true

        }

    }


    componentDidMount(){
        console.log("componentDidMount executed....")

document.title=`React Counter ${this.state.count}`

    }



    static getDerivedStateFromProps(props,state){
        console.log("getDerivedStateFromProps executed....")

        return {favouriteColor:props.color}

    }


   
     componentDidUpdate(){
        console.log("componentDidUpdate executed....")

        document.title=`React Counter ${this.state.count}`

     }

     shouldComponentUpdate(){
        console.log("shouldComponentUpdate executed....")
        return true
     }

     getSnapshotBeforeUpdate(props,state){
        console.log("getSnapshotBeforeUpdate executed....")
        console.log(props,state)

     }


    clickHandler=()=>{
     this.setState({
        count:this.state.count+1
     })
    }


    childHide=()=>{
        this.setState({
            childIsVisible:!this.state.childIsVisible
        })
    }

    render(){
        console.log("render executed....")
        return(
            <>
            <h4>Mounting phase {this.state.message} {this.state.count}</h4>
            <h4>{this.state.favouriteColor}</h4>
            <button onClick={this.clickHandler} >Click to change the count</button>

            {
                this.state.childIsVisible ?  <Child/>:null
            }


<button onClick={this.childHide} >Click to child </button>
       

            
            </>
        )
    }
}

export default Mounting