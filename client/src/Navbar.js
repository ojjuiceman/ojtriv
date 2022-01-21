import {Link} from "react-router-dom"
import React from "react";
// import { Contain } from "./Styles/Contain.styled"


function Navbar({ user, setUser}) {


  function handleLogoutClick() {
    console.log("logged out", user)
    fetch("/users", {
        method: "DELETE"
    })
        .then(r=>r.json())
        .then(setUser(null));
}


console.log("thats that user tho ", user)


  return(
  <nav className = "navBar">
    {/* <h1 className="triviapp">TriviApp</h1> */}
            {user && <button className="logout-button" onClick={handleLogoutClick}>
            <Link className="hello" to="/Registration" >Logout</Link>
            </button>}
            {user ? (<h1>Hi {user.username}!</h1>) : (<h1>{''}</h1>)}
  </nav>
  )
}

export default Navbar;