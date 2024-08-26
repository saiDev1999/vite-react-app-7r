import React, { Component } from 'react'

export default class Child extends Component {

   constructor(){
    console.log("child constructor executed ... ")
    super()
    this.state={
        message:"child"
    }
   }

   componentDidMount(){
    console.log("child componentDidMount executed....")


}


componentWillUnmount(){
    alert("unmounted")
}




  render() {
    console.log("child render executed ... ")
    return (
      <div>
        <h2>I am child visible</h2>      </div>
    )
  }
}
