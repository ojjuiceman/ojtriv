import React, { useState } from "react";
import './App.css';
import {Link} from "react-router-dom"




function CategoryCard( {specificCategory, listOfCategories, handleCatAndDiff}) {


  // function handleCatAndDiff(e) {
  //   for(var i = 0; i < listOfCategories.length; i++) {
  //     if (listOfCategories[i] === specificCategory) {
  //             console.log("abajaba", i + 9)
  //             let category = i + 9
  //           }
  //   }
  //   let difficulty = e.target.value
  // }


  return(
    <li className="card">
    <div className="image">
      {/* <span className="price">${price}</span> */}
      {/* <img src={image} alt={name} /> */}
    </div>
    <div className="details">
      {/* {favorite ? (
        <button
          onClick={() => setFavorite(false)}
          className="emoji-button favorite active"
        >
          ★
        </button>
      ) : (
        <button
          onClick={() => setFavorite(true)}
          className="emoji-button favorite"
        >
          ☆
       </button>
      )} */}
      <strong>{specificCategory}</strong>
      <br></br>
      <br></br>

      {/* <Link to="/Question"><button className="easy-button" value="easy" onClick={() => handleCatAndDiff("easy", specificCategory)}>easy</button></Link> */}
      {/* <Link to="/Question"><button value="medium" onClick={() => handleCatAndDiff("medium", specificCategory)}>medium</button></Link>
      <Link to="/Question"><button value="hard" onClick={() => handleCatAndDiff("hard", specificCategory)}>hard</button></Link> */}


      {/* <Link to="/Question"><div class="sub-main"><button value="hard" class="button-two"
      onClick={() => handleCatAndDiff("hard", specificCategory)}>hard</button></div></Link> */}
      <Link to="/Question"><button className="difficulty-level-button" value="easy" onClick={() => handleCatAndDiff("easy", specificCategory)}><span>easy</span></button></Link>
      <Link to="/Question"><button className="difficulty-level-button" value="medium" onClick={() => handleCatAndDiff("medium", specificCategory)}><span>medium</span></button></Link>
      <Link to="/Question"><button className="difficulty-level-button" value="hard" onClick={() => handleCatAndDiff("hard", specificCategory)}><span>hard</span></button></Link>




      {/* <button onClick={handleDeleteClick} className="emoji-button delete">
        🗑
      </button>
      <button onClick={() => handleAddItem(id)}>Buy</button>; */}

    </div>
    </li>

  )
}

export default CategoryCard;