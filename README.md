HOC in react : (higher order component)

HOC is a pattern in react where a function takes the component as an argument and returns the enhanced component

Using this pattern we can reuse the component functionality with out writing multiple times

1. withCounter(Component)

syntax : const withCounter =(Component)=>{

return ()=>{

      return <Component   state={0} handler={increment}   >

}

}

const redRanger = redSuit(Jack)

const enhancedProfile = withProfile(Screen2)
const enhancedProfile = withProfile(Screen3)

2.  const withProfile =(Component)=>{

    return()=>{

    const [profileData,setProfileData]=useState({})

    useEffect (()=>{
    //api
    },[])

          return <Component   profile={profileData}  >

    }
    }

React.memo(HomeScreen)

1. Recipe maker
1. Login page - dummy json users
1. Main screen for recipe listing , search functionailty , see more , add to favourites ,go to favourites
1. detial recipe screen - add to favourites , go back , Go to favourites
1. Favourite screen - remove from favourites
1. Header - count of favourite recipes
1. Weather -
   1. current location weather ,
   2. search by city ,
   3. history of previous search locations
1. Country finder
1. Pagination
1. Listing screen
1. detail screen

Tasks:

1. Repeat the class
2. Firebase google - POC - Proof of concept
3. Patterns in react ?
4. what is the HOC pattern ?
5. what is render prop pattern ? give examples (https://www.patterns.dev/react/render-props-pattern)
