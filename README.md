useEffect : useEffect is a react functional hook which is used to cause side effects with in the component

side effects : async actions - dom manipulations, event listeners, data fetching, third party subscribtions

useEffect is replacement of 3 life cycle methods in class components

1. componentDidMount
2. componentDidUpdate
3. componentWillUnmount

syntax : useEffect(()=>{},[])

note : useEffect behaviour will depends on 2 argument which is an array

case 1: if array is empty , useEffect will behave like componentDidMount
it will run only once in a life cycle

useEffect(()=>{},[])

case 2 : if array is filled with values , depending upon value changes useEffect will behave like a componentDidUpdate

useEffect(()=>{},[value1,value2...])
if values were changing useEffect will re-runs

this arry will call it as the dependency array

case 3 : No dependency array

useEffect(()=>{})

if no dependency array , component will keep on re-rendering when ever state or prop changes
it might also leads to infinite rendering of component

case 4 : if useEffect callback functions returns the funtion , with in the returned function we can prevent memory leaks of the component - componentWillUnmount

useEffect(()=>{
return ()=>{
// prevent the memory leaks
}
},[])

Topic:

1. UseEffect hook
2. Examples and use cases of useEffect

Tasks :

1. Repeat the class - understand the code flow
2. 5 examples for useState, useRef and useEffect
3. based on the button events , show the corresponding data in the tables
4. Tab switching in react
5. document the discussed hooks
6. useEffect , useLayOutEffect , which is better
