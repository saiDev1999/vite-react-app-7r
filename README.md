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

State uplifting :

Communicating with the data to keep parent and child component states in sync

DOM :

When any element changes in the dom, It will reload the entire dom nodes
It will result poor performance , Loading time increases

React Vdom :

V-DOM : Vdom is a memory representation of a original dom, It will compare the previous and current changes and updates only specific parts of UI

2 algorithms of vdom :

1. Diffing - Diffing compares the previous vdom and current vdom , and check the changes
2. Reconciliation - Based on the changes observed corresponding layout gets updated leaving rest of UI unchanged

React apps were faster

Tasks:

1. Take a button for adding bulbs in the card
2. On click of bulb , show on and off cases
3. Also show the no of bulbs count
4. Filter the products based on the categories - 3 apis
5. Create a common table component(Bootstrap or react bootstrap) for different use cases , Hit the api and show data in table
