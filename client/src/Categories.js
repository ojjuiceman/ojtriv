import React from "react";
import CategoryCard from "./CategoryCard"
import './App.css';


function Categories({ user, handleCatAndDiff, listOfCategories }) {
  console.log("heres the user in categories function ", user)


  return (
<main className="page">
<ul className="cards">

    {listOfCategories.map((specificCategory) => (
<CategoryCard specificCategory={specificCategory} listOfCategories={listOfCategories} handleCatAndDiff={handleCatAndDiff}/>
))
}
</ul>
</main>
 )
}

export default Categories