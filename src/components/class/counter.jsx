import { Component } from "react";
import { errorToasts, sucessToasts } from "../toasts/toast-helpers";







class Counter extends Component{
    state={
        count:0
    }
    incrementHandler=()=>{
        this.setState({
            count:this.state.count+1
        },()=>{
            sucessToasts(`The current count ${this.state.count}`,"top-right")

        })
    }
    decrementHandler=()=>{
        this.setState({
            count:this.state.count-1
        },()=>{
            errorToasts(`The current count ${this.state.count}`,"top-right")

        })
    }
    resetHandler=()=>{
        this.setState({
            count:0
        },()=>{
            sucessToasts(`The current count ${this.state.count}`,"top-right")

        })
    }
    render(){
        return(
            <>
            <h2>Counter {this.state.count}</h2>
            <button onClick={this.incrementHandler} >Increment</button>
            <button onClick={this.decrementHandler} >Decrement</button>
            <button onClick={this.resetHandler} >Reset</button>
            </>
        )
    }
}

export default Counter