import { useMemo, useState } from "react"




const UseMemo=()=>{
       
    const[milkQuantity,setMilkQty]=useState(1)
    const[riceQuantity,setRiceQty]=useState(1)



    const milkPriceCalculation =useMemo(()=>{
        console.log("milk price calculating......")
        const priceOfMilk= 50
        return milkQuantity*priceOfMilk
    },[milkQuantity,])



    const ricePriceCalculation =useMemo(()=>{
        console.log("rice price calculating......")
        const priceOfRice= 100
        return riceQuantity*priceOfRice
    },[riceQuantity])
  

   


    const milkHandler=()=>{
        setMilkQty(milkQuantity+1)
    }

    const riceHandler=()=>{
        setRiceQty(riceQuantity+1)
    }




     

    return(
        <>

        <h4>Milk Quantity {milkQuantity}  - price  {milkPriceCalculation}</h4>
        <h4>Rice Quantity {riceQuantity} - price {ricePriceCalculation} </h4>

        <button onClick={milkHandler} >Change Milk Quantity</button>
        <button onClick={riceHandler} >Change Rice Quantity</button>

   

      
        
        
        </>
    )
}
export default UseMemo






