useRef :

useRef is used to persists the values between renders with out causing re-render for the component

useRef is used to store the previous state

useRef is used to access the elements in the dom

syntax :

useRef accepts initial argument and returns the object

object contains current proprty

To access the content from the object , we need to use object.current

React Forms :

1. Uncontrolled Component : In uncontrolled components form state controls is controlled DOM, React doesn't have any control with the forms

we cannot field validations

In uncontrolled components , To access the elements from dom we use useRef hook

Steps for uncontrolled components :

1. Consider form in jsx
2. To control the input elements in the dom , we need to attach ref attribute for the input element and value will be take from useRef object reference
3. on Submit to collect the value we will use object.current.value
4. Validate the inputs and submit the form (post api call)

5. Controlled Components: In Controlled components form state controls is controlled by React

we can do field validations

Tasks:

1. Repeat the class
2. Apply css for the today's class
3. Success full user logins must be filled inside the table
4. Also give delete button in the table for each user
5. Difference controlled and uncontrolled components

Topics :

1. Use Ref hook
2. React forms
3. Uncontrolled components
4. Validations
