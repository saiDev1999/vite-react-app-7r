import { useNavigate } from "react-router-dom"
import UseEffectExample from "../components/hooks/useEffect/useEffectEx"
import NavBar from "../components/navbar/navbar"






const InvalidScreen=()=>{

    const navigate = useNavigate()

    const handleNavigation=()=>{
        navigate("/")

    }
    return(
        <>

        
        <h2>Page not found 404 </h2>
        <button onClick={handleNavigation}  >Back to home</button>



        </>
    )
}

export default InvalidScreen