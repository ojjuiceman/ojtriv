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
    {/* <div className="triviapp">TriviApp</div> */}
    <div className="log">
            {user && <button className="logout-button" onClick={handleLogoutClick}>
            <Link className="hello" to="/Registration" >Logout</Link>
            </button>}
            </div>
            <div className="triviapp">TriviApp</div>

            {/* {user ? (<h1>Hi {user.username}!</h1>) : ('')} */}
  </nav>
  )
}

export default Navbar;