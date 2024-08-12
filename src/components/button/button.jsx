


const CustomButton =(prop)=>{
    const {text="button",onPress=()=>{},bgColor="green"}=prop
    const buttonText="Click me" 
    return(
        <button style={{backgroundColor:bgColor}}  onClick={onPress} >{text}</button>
    )
}

export default CustomButton