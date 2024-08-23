fetch(URL).then((data)=>data.json()).then(response=>console.log(response))

const fetchData=async()=>{
const data = await fetch(URL)
const finalData=await data.json()

    console.log(finalData)

}

Life cycle method in class component

1. component did mount : This method in class component is used to perform the side effects with in the component in the early phase or page load

side effects : fetching data from server , Dom manipulations, Timing events , event listeners

note : ComponentDidMount executes only once in a life cycle
ComponentDidMount is auto invoke method on page load

<React.StrictMode> -- This will trigger the app twice to ensure the early observation of bugs in the application

Fetch method drawbacks :

1. There is no automatic json conversion
2. Status codes not provided
3. Intercepting of request and response is not provided by fetch method

Axios : Axios is a third party package for making http calls in a efficient manner
npm i axios

usage :
import axios from "axios"

axios.get(URL).then(response=>console.log(response))

fetchData=async()=>{
const finalData=await axios.get(URL)
console.log(finalData)
}

Tasks :

1. Repeat the class
2. Using axios , Hit the fakestore api , display in the cards (include instagram card)
3. Difference between axios and fetch
4. what is the pure function in js
5. what is the side effects in js
6. Filter the products based on the categories - 3 apis
