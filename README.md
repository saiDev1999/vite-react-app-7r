Pure component in react :

Pure Component in react skips the re-rendering of the component until unless its state or prop changes\

parent ---- child1 ---

performance will be effected

pure component implements shouldComponentUpdate life cycle method and shallow the state and props

class Child extends PureComponent{
render(){
return(
<>

<h3>Hello</h3>
</>
)
}
}

note : For class component we use pure components and for functional components we use React.memo

Difference :

1. functions used in functional components and classses used in class component
2. render method used in class components , There is no render in functional
3. inheritence applied only for class components
4. For class component we use pure components and for functional components we use React.memo
5. Life cycle methods is only applicable for class components
6. setState is used in class components
7. Boiler plate code is more in class components
8. Code will be splitted based on the life cycle phases

Topics:

1. Pure components
2. React.memo
3. Difference between class and functional components

Tasks :

1. Repeat the classs
2. what is the composition in react
3. what is the synthetic events in react
4. when to use pure component over regular component, difference between component and pure component
5. recipes read more and read less options inside the cards
