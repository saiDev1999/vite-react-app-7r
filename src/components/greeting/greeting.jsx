


const Greeting =(props)=>{
    const {children,text}=props
    return(
        <div>
            <h4>good afternoon {children}</h4>
            <h5>{text}</h5>
        </div>
    )
}

export default Greeting