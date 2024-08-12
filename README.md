Props :

Props is an object , which shares the data or information from parent to children component
Props are immutable
Props stands for properties

note : Using props i can reuse the component

Attribute :

1. additional info to element
   <img src="" alt="" width="" height=">

2. additional info to components
   <CustomImage  source=""  alternateText="bag"  >

Using the props we can customize the names
Using the props we can control what needs to display in the user interface
For the props we can give any names

props are of 2 ways :

1. general prop
   ex: <CustomImage  source=""  alternateText="bag"  >
2. children prop

destructure :

const data={
name:"tulasi",
score:99
}

const{name}=data

<CustomButton   text="login"  bgColor="green"   >
<CustomButton   text="sign up"  bgColor="red"   >

props can any data type or it can be the function

map method for list rendering

note : whenever we are using map method always use key prop, key props ensures unique for the each list item(faster updates and deletes)
