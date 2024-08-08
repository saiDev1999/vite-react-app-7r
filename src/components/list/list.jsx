











const CustomList=()=>{
    return(
        <ul>
           <ListItems/>
        </ul>
    )
}

export default CustomList


export const CustomOrderedList=()=>{
    return(
        <ol>
            <ListItems/>
        </ol>
    )
}


const ListItems=()=>{

    const Fruits=["Apple","Banana","Kiwi","Mango","Orange"]
    return(
        <>
        {
        Fruits.map((eachFruit)=>{
            return <li>{eachFruit}</li>
        })
        }
            </>




    )
}


// DRY : DONT REPEAT YOURSELF
