import "./greeting.css"
import style from "./greeting.module.css"


const Greeting =(props)=>{
    const {children,text}=props
    return(
        <div className={style.card} >
            <h4>good afternoon {children}</h4>
            <h5>{text}</h5>
        </div>
    )
}

export default Greeting