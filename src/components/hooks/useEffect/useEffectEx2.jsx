import { useEffect, useState } from "react"






const UseEffectExample2=()=>{

    const [position,setPosition]=useState(
        {
            xPosition:0,
            yPosition:0
        }
    )


    const mouseMoveTracker=(event)=>{

        const{clientX,clientY}=event
         setPosition({...position,xPosition:clientX,yPosition:clientY})
    
      }


useEffect(()=>{

  window.addEventListener("mousemove",mouseMoveTracker)

  const intervalI=setInterval(()=>{},1000)

  return ()=>{
   // Clean up for the memory leaks , --- componentWillUnmount method
    window.removeEventListener("mousemove",mouseMoveTracker)

    clearInterval(intervalI)



  }

},[])



    return(
        <>
        
        <h3>UseEffectExample2</h3>
        <h5>X position - {position.xPosition}</h5>
        <h5>Y position - {position.yPosition}</h5>
        </>
    )
}

export default UseEffectExample2