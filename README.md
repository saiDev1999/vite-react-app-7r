Human cycle earth:

1. Born stage
2. Survival stage
3. Expiry

1.Life cycles methods will be there only for class components
Life cycle of a component (dom):
3 phases

1. Mounting phase : A component is created and inserted inside the dom

4 methods is there in mounting phase

1. Render : Using this all jsx content will be inserted inside the dom
   render is a mandatory method
2. componentDidMount : It is used to perform the side effects in the early phase of a component side effect ex: fetching data, event listeners , timing events , dom manipulation
3. constructor : constructor is a method which is used to initialize the component state and bind the events, constructor is a first method in mounting phase
4. static getDerivedStateFromProps : this method is used to initial or set the state based on the initial props

5. Updating phase : When the component is being updated coz of props or state

5 methods :

1. render : This method ensures the rexecution of code in updating phase
2. static getDerivedStateFromProps : this methods updates the state based on the props
3. componentDidUpdate: This method is used to perform the side effects in updating phase
4. shouldComponentUpdate - This methods tells us to re-render or not of a component,
   it returns the boolean, By default it will be true
5. getSnapshotBeforeUpdate - To get the state or props before update, we can use this method

6. Unmounting phase : When the component is removed from the dom

7. ComponentWillUnmount: Some components will have memory leaks in the application, To prevent memory leaks , we will use ComponentWillUnmount life cycle method while removing from dom

5 jars :
A, B, C, D, E

5 + 4 + 3 + 2 + 1

each jar contains equal normal laddus

normal laddus - 10 grams

one jar contains poisonous laddus

poisonous laddus - 9 grams

Weight machine for one time use

Tasks:

1. Repeat the class
2. Document the life cycle methods in class components
3. Weather api task
