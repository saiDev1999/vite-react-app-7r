

const CustomImage=(props)=>{
    console.log(props)
    // props.width=200

    const{source,width=100,alternateText="text",height=200}=props
    return(
        <img  src={source}  height={height} width={width} alt={alternateText}   />
    )
}
export default CustomImage