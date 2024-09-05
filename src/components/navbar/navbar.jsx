import { Link, NavLink } from "react-router-dom"
import "./navbar.css"
import { useContext } from "react"
import { UserDetails } from "../../navigations/navigation-stack"





const NavBar=()=>{


const {darkTheme}=useContext(UserDetails)

    const linkStyle={textDecoration:"none",color:"blue"}
    const liStyle={margin:"10px"}
    return(
        <nav className={`navbar navbar-expand-sm bg-${darkTheme ? "dark":"light"} navbar-${darkTheme ? "dark":"light"}`}>
        <div className="container-fluid">
          <ul className="navbar-nav">
            <li className="nav-item" style={liStyle} >
              <NavLink   to={"/"} >Main</NavLink>
            </li>
            <li className="nav-item" style={liStyle} >
            <NavLink  to={"about"} >About </NavLink>
            </li>

            <li className="nav-item" style={liStyle} >
            <NavLink  to={"category"} >Categories </NavLink>
            </li>
            <li className="nav-item" style={liStyle} >
            <NavLink  to={"products"} >Products </NavLink>
            </li>
           
           
          </ul>
        </div>
      </nav>
      

    )
}

export default NavBar