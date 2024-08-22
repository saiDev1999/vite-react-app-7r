import { Component } from "react"
import FirstComponent from "../bootstrap/first-component"
import Counter from "./counter"
import { sucessToasts } from "../toasts/toast-helpers"
import { toast } from "react-toastify"
class YoutubeButton extends Component{
  state={
    isSubscribe: false,
    text1:"Subscribe",
    text2:"Subscribed",
    cards:[]
  }


  clickHandler=()=>{
 
  this.setState({
    isSubscribe:!this.state.isSubscribe,
    cards:[...this.state.cards,{name:"John",designation:"react"}]
  },()=>{
    sucessToasts("hello","top-right")
  })
   

  }
 


    render(){
        return(
            <>
   
           <button   onClick={this.clickHandler}>{this.state.isSubscribe?this.state.text2:this.state.text1}</button>
           {
            this.state.isSubscribe ? <div>
                <Counter/>
                <FirstComponent/>

            </div>:<div>
                <h2>Please Subscribe to access the content</h2>
            </div>
           }
           </>
        )
    }
}

export default YoutubeButton