import { Route,Routes } from "react-router-dom"
import HomeScreen from "../screens/home-screen"
import AboutScreen from "../screens/about-screen"
import NavBar from "../components/navbar/navbar"
import InvalidScreen from "../screens/invalid-screen"
import CategoryScreen from "../screens/category-screen"
import { JewelleryScreen } from "../screens/jewellery-screen"
import { ElectronicsScreen } from "../screens/electronics-screen"
import ProductScreen from "../screens/product-screen"
import ProductDetailScreen from "../screens/product-detail-screen"
import { createContext, useState } from "react"





export const UserDetails=createContext()
const ThemeData=createContext()


const NavigationStack=()=>{

    const[username,setUsername]=useState("ram")
    const [isDark,setIsDark]=useState(true)
    const[salary,setSalary]=useState(10000)

    const darkHandler=()=>{
        debugger
        setIsDark(!isDark)
    }

    const salaryHandler=()=>{
        setSalary(salary+1000)
    }


    return(
        <ThemeData.Provider value={{myFavColor:"green"}} >

        <UserDetails.Provider value={{
            username:"ram",
            darkTheme:isDark,
            salary,
            darkHandler,
            salaryHandler
        }}  >
              <>
        <NavBar/>

        {
            true ?

            <Routes>
            <Route path="/" element={<HomeScreen/>}  />
            <Route path="about" element={<AboutScreen/>}  />
            <Route path="*" element={<InvalidScreen/>}  />
            <Route path="category" element={<CategoryScreen/>} >

            <Route index element={<ElectronicsScreen/>}  />

            <Route path="jewellery" element={<JewelleryScreen/>}  />
            <Route path="electronics" element={<ElectronicsScreen/>}  />


            </Route>

            <Route path="products" element={<ProductScreen/>} />

            <Route path="products/:productId" element={<ProductDetailScreen/>} />




        </Routes>
        
        :
        <Routes>
            <Route path="/login" element={<HomeScreen/>}  />
    

        </Routes>


        }
        
        </>

        </UserDetails.Provider>

        </ThemeData.Provider>


      
   
       


    )
}
export default NavigationStack