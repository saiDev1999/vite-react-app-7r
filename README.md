1.General prop additional to a component <Image source={} alternateText={} />
2.children prop : children prop is used to nest the components or jsx or text content
note : To receive the children we must use the children keyword
2.1 - > jsx
<Image>

<h3>hello </h3>
<h6>good morning </h6>

</Image>
2.2 - > text
<Image>

good afternoon

</Image>

2.3 - > Component

<Image>
<heading/>

</Image>

Es 6 Features :

1. Arrow functions
2. Template literals
3. Destructuring
4. Imports/Exports
5. Map,Filter,Reduce
6. Spread operator
7. Rest operator
8. Object literal
9. default parameters
10. promises and async await
11. Sets and Maps

LOGIN --- admin, user,

const isAdmin = false
if(isAdmin){
console.log("welcome Admin")
}else{
console.log("welcome user")
}

welcome admin
welcome user

react condtional rendering :

We will render UI based on the specific condtion

DRY : DON'T REPEAT YOURSELF

4 ways :

1. if/else
2. ternary operator
3. logical and or short circuit (only handles true case) &&
4. switch cases
<!-- 5. null or undefined -->
