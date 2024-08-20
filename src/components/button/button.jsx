


const CustomButton =(prop)=>{
    const {text="button",onPress=()=>{},bgColor="green"}=prop
    const buttonText="Click me" 

    const buttonStyles={backgroundColor:"red",color:"white"}
    return(
        <button style={buttonStyles}  onClick={onPress} >{text}</button>
    )
}

export default CustomButton