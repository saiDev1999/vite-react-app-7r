1. Presentation -- functional
2. Container - class

Hooks :

1. container -- functional + class components
2. Presentation -- functional components

Hooks were introduced in 2018 version 16.8

Hooks are reusable functions which let us use of state and other react features without writing the class

rules of hooks :

1. Hooks were only used in functional , it doesn't support in class
2. Hooks must always call at the top of the component and must import only from react
3. Hooks cannot be used inside the conditions , loops, switch statements
4. Hooks cannot be used in event triggerings

examples :

1. useState
2. useEffect
3. useRef
4. useReducer
5. useContext
6. useCallback
7. useMemo
8. custom hooks ex : useCounter

useState :

useState is used in functional based components , it allows us to create and manage the data or information of a particular component

useState is replica of creating of state by contructor and using setState method in class components

Syntax :
useState will accept initial argument

useState(10)

initial argument can be any data type or function returning a value
note : this argument is executed only for the first time, corresponding renders will ignore the initial argument changes

useState will return array

const counter = useState({})

const [currentEmployee,setCurrentEmployee]=useState({}) ---> Final syntax

This array contains 2 elements 1. current state 2. set function

here in the useState we will always use const keyword which represents immutability of the state directly

The only way to change the state in useState is by using set Function

Tasks :

1. Repeat the class
2. Use cards in the todo component
3. use State - https://react.dev/reference/react/useState
4. Update the item in todo by chaging updated text in the list
5. Crete 100 cards , on click of particular card need to even or odd - Heading on the top of screen

Topics :

1. Hooks in react
2. Rules of hooks
3. UseState usage and examples
