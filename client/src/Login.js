import React, { useState } from "react";
import './Auth.css';
import { Link, useHistory } from "react-router-dom"



function Login({ handleLogin, user, setUser }) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [passwordShown3, setPasswordShown3] = useState("");

  console.log("here is use history ", useHistory)
  // const [userData, setUserData] = useState(null);
  // const [isLoggedIn, setIsLoggedIn] = useState(false);



  const history = useHistory()

  // history.push('/wherever')
  // wont it route to the categories page anyways, since i have a /categories on the login link? also,
  // what does allteh stuff after "else" do? all that state stuff

  function handleLogSubmit() {
    fetch("/Login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ username, password }),
    })
      .then((r) => r.json())
      .catch((err) => {
        console.log("behold the error", err);
      })
      .then((data) => {
        if (data.error) {
          alert("Login Failed; Incorrect Name/Password Combination. Or Maye You Haven't Signed Up?")
          console.log("log the error again ", data.error);
        } else {
          handleLogin(data)
          // setUserData(data);
          // setIsLoggedIn(true);
          history.push('/Categories')
          // console.log("logging the data", data);
          // setChange(Math.random());
        }
      })
      // .then((user) => handleLogin(user));
  }

  // function handleLogSubmit(e) {
  //   console.log("whatsup")
  //   e.preventDefault();
  //   fetch("/Login", {
  //     method: "POST",
  //     headers: {
  //       "Content-Type": "application/json",
  //     },
  //     body: JSON.stringify({ username, password }),
  //   }).then((r) => {
  //     if (r.ok) {
  //       r.json().then((user) => handleLogin(user));
  //     }
  //   });
  // }

  function togglePassword3() {
		setPasswordShown3(passwordShown3 => !passwordShown3)
	}

  return (
    <>
    <div className="login-message">Log in to get started!</div>
<div id="login">

				<form className="form">
					<p className="fieldset">
						<label className="image-replace username" for="signin-email">Username</label>
						<input className="full-width has-padding has-border" id="signin-email" type="email" placeholder="Username" value={username}
        onChange={(e) => setUsername(e.target.value)}/>
						<span className="error-message">An account with this username address does not exist!</span>
					</p>

					<p className="fieldset">
						<label className="image-replace password" for="signin-password">Password</label>
						<input className="full-width has-padding has-border" id="signin-password" type={passwordShown3 ? "text" : "password"}  placeholder="Password" value={password}
        onChange={(e) => setPassword(e.target.value)}/>
						<a href="#0" className="hide-password" onClick={togglePassword3}>Show</a>
						<span className="error-message">Wrong password! Try again.</span>
					</p>

					<p className="fieldset check">
						<input type="checkbox" id="remember-me" />
						<label for="remember-me">Remember me</label>
					</p>

          </form>


          <p className="fieldset" onClick={handleLogSubmit}>
					{/* <Link to="/Categories" > */}
						<input className="full-width has-padding" type="submit" value="Login"/>
						{/* </Link> */}
					</p>


          {/* <Link to="/Registration" ><button><a href="#0" className="cd-close-form">Registration</a></button></Link> */}
          {/* <br></br>
          <br></br>
          <br></br> */}

       <div className="reg-button">
          <Link className="regy" to="/Registration" ><button className="cd-close-form">Registration</button></Link>
          </div>
          {/* <a href="#0" className="cd-close-form">Registration</a> */}

			</div>

      </>
  )
}

export default Login;
