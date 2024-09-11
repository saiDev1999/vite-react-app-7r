useCallback :

useCallback is a hook in react functional components which is used to memoize the functions , without recalculating the functions when same inputs were given

syntax: useCallback(()=>{},[])

using useCallback we can prevent the children re-rendering

<Button  title="Login"  onPress={onPress}   >

custom hooks :

custom hooks is used for common functionality in the component with out writing in multiple components

custom hooks were designed using existing hooks in react
custom hooks should also follow the rules of hooks

scenario : design a hook for data fetching

ex: useFetch, useAxios

hooks were reusable functions

const [data,setData]=useState([])

useEffect(()=>{},[])

Tasks:

1. Repeat the class
2. How to handle multiple async calls in the component
3. explore about promise all, promise race
4. design counter, local storage, internet hook, previous value, lat and long hook
5. what is code review in git, PR checklist
