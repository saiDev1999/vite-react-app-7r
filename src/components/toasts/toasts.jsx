import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { errorToasts, sucessToasts } from './toast-helpers';

const CustomToasts=({message})=>{
    const notify = () => {
        errorToasts("i am error","top-right")
        // try{
        //     sucessToasts("I am clicked","top-right")
        // }catch(err){
            
        // }

      };
    return(
        <div>
        <button onClick={notify}>Notify!</button>
        <ToastContainer />
      </div>
    )
}

export default CustomToasts