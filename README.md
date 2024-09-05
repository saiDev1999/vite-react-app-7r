useState - local state management

Types of state management :

1. local state management - creating and managing data with in the component (useState)
2. global state management - creating and managing can be done through out the application

global state management 3 techniques :

1. Props -- prop drilling : passing data to the final component through out every level of component tree , even though intermediate components not using the data

drawbacks:

Code Complexity: As components grow, prop drilling increases code complexity as it is difficult to track the flow of data through various components.
Reduced Maintainability: It will become very challenging to maintain the code with prop drilling. When changes are required in the data flow, you need to make changes in many components.
Performance Overhead: We have to pass props through unnecessary intermediary components which can impact performance.
Decreased Component Reusability: Components used in prop drilling become tightly coupled to the structure of the parent components, so it very difficult to use it on other parts of the application.
Increased Development Time: Prop drilling often requires additional planning to implement. This can slow down the development process, especially when the component hierarchies is complex.

2. Context api
3. Redux : third party package

context api : it is the way to manage the state in react application globally by avoiding prop drilling

steps to create context api in react app:

1. Identify the set of components that needs to share the data -- whole app
2. create some data ex: username:"sai" -- and react will provide createContext method for creating the context
3. wrap the created context using provider and pass value prop for the wrapped provider

4. To consume the data we use hook called useContext, it accepts the createdContext method being used in app

Tasks:

1. Repeat the class
2. Global counter using useContext and useState
3. what is prop drilling and drawbacks
4. Try context with different data types
5. implement dark theme in react app using context api
