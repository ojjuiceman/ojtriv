import React, { useEffect } from "react";
import CategoryCard from "./CategoryCard"
import './App.css';


function Categories({ user, setUser, handleCatAndDiff, listOfCategories }) {
  // console.log("heres the user in categories function ", user)

  // useEffect(() => {
  //   fetch("/me").then((response) => {
  //     if (response.ok) {
  //       response.json().then((user) => setUser(user));
  //     }
  //     else{
  //       console.log(response)
  //     }
  //   });
  // }, [])

  return (
<main className="page">
 {user &&  <div className="hi-choose"><h1 className="hi-user">Hi {user.username}!</h1> <h3>Choose a Category and Level</h3></div>}
<ul className="cards">

    {user && listOfCategories.map((specificCategory) => (
<CategoryCard specificCategory={specificCategory} listOfCategories={listOfCategories} handleCatAndDiff={handleCatAndDiff}/>
))
}
</ul>
</main>
 )
}

export default Categories