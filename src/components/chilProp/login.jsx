






// const LoginComponent=(props)=>{
//     const {isAdmin=false}=props

//     if(isAdmin){
//         return(
//             <h3>Wellcome admin</h3>
//         )
//     }else{
//         return(
//             <h3>Wellcome user</h3>
//         )

//     }
  
    
// }


// const LoginComponent=(props)=>{
//     const {isAdmin=false}=props
   
//   return (
//     <div>
//         {/* {isAdmin ? <h3>Wellcome admin</h3>:<h3>Wellcome user</h3>} */}
//         <h3>Wellcome {isAdmin?"Admin":"User"}</h3>
//     </div>
//   )
    
// }


// const LoginComponent=(props)=>{
//     const {isAdmin=false}=props
   
//   return (
//     <div>
// {isAdmin && <h3>Welcome admin</h3> }
// <h3>App tour</h3>
//     </div>
//   )
    
// }


const LoginComponent=({flag=true})=>{
    if(flag){
        return <h3>wellcome random user</h3>
    }
  return (
    <div>
        <h3>Wellcome </h3>

    </div>
  )
    
}
export default LoginComponent