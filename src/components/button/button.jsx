import React from "react"



const CustomButton =(prop)=>{
    console.log("child re-render",prop.text)
    const {text="button",onPress=()=>{},bgColor="green"}=prop

    const buttonStyles={backgroundColor:"red",color:"white"}
    return(
        <button style={buttonStyles}  onClick={onPress} >{text}</button>
    )
}

export default React.memo(CustomButton)