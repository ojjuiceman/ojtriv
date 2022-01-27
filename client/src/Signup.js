import React, { useState } from "react";
import './Auth.css';
import { Link, useHistory } from "react-router-dom"
// import { useHistory } from "react-router-dom";




function Signup({ handleLogin }) {
	const [username, setUsername] = useState("");
	const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
	const [passwordConfirmation, setPasswordConfirmation] = useState("");
	const [agreed, setAgreed] = useState(false)
	const [passwordShown, setPasswordShown] = useState("");
	const [passwordShown2, setPasswordShown2] = useState("");



  const history = useHistory()


	function handleSubmit(e) {
		console.log('whatever1')
    // e.preventDefault();
		console.log('whatever2')
		// history.push("/Categories");


    fetch("/Signup", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
				username: username,
				email: email,
				password: password,
				password_confirmation: passwordConfirmation
			}),
    })
			.then((r) => r.json())
			.catch((err) => {
        console.log("behold the error", err);
      })
      .then((data) => {
				if (data.errors) {
          alert("Signup Failed")
          console.log("log the error again ", data.errors);
        } else {
				handleLogin(data)
				history.push('/Categories')
        console.log("the data from the Signup fetch", data)
			}
			});
	}

	function togglePassword() {
		setPasswordShown(passwordShown => !passwordShown)
	}

	function togglePassword2() {
		setPasswordShown2(passwordShown2 => !passwordShown2)
	}

  return (

<>
<div className="login-message">Sign up to get started!</div>

<div id="login">
				<form className="form">
					<p className="fieldset">
						<label className="image-replace username" for="signup-username">Username</label>
						<input className="full-width has-padding has-border" id="signup-username" type="text" placeholder="Username" value={username} onChange={(e) => setUsername(e.target.value)}/>
						<span className="error-message">Your username can only contain numeric and alphabetic symbols!</span>
					</p>

					<p className="fieldset">
						<label className="image-replace email" for="signup-email">E-mail</label>
						<input className="full-width has-padding has-border" id="signup-email" type="email" placeholder="E-mail" value={email} onChange={(e) => setEmail(e.target.value)}/>
						<span className="error-message">Enter a valid email address!</span>
					</p>

					<p className="fieldset">
						<label className="image-replace password" for="signup-password">Password</label>
						<input className="full-width has-padding has-border" id="signup-password" type={passwordShown ? "text" : "password"} placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)}/>
						<a href="#0" className="hide-password" onClick={togglePassword}>Show</a>
						<span className="error-message">Your password has to be at least 6 characters long!</span>
					</p>

           <p className="fieldset">
          <label className="image-replace password" for="signup-password">Confirm Password</label>
						<input className="full-width has-padding has-border" id="signup-password" type={passwordShown2 ? "text" : "password"} placeholder="Confirm Password" value={passwordConfirmation} onChange={(e) => setPasswordConfirmation(e.target.value)}/>
            <a href="#0" className="hide-password" onClick={togglePassword2}>Show</a>
						<span className="error-message">Password does not match</span>
					</p>

					<p className="fieldset check">
						<input type="checkbox" id="accept-terms" onChange={()=> {
							setAgreed(agreed => !agreed)
						}}/>
						<label for="accept-terms">I agree to the <a className="accept-terms" href="#0">Terms</a></label>
					</p>

					</form>


				{/* <p className="fieldset" onClick={handleLogSubmit}>
						<input className="full-width has-padding" type="submit" value="Login"/>
					</p> */}

          <p className="fieldset" onClick={handleSubmit}>
					{/* <Link to="/Categories" > */}
						<input className="full-width has-padding" type="submit" value="Create Account" disabled={!agreed}/>
						{/* </Link> */}
					</p>



          <Link to="/Registration" ><button className="cd-close-form">Registration</button></Link>
			</div>
			</>

  )
}

export default Signup;






// <div>
// <p class="tip">Click on button in image container</p>
// <div class="cont">
//   <div class="form sign-in">
//     <h2>Welcome back,</h2>
//     <label>
//       <span>Email</span>
//       <input type="email" />
//     </label>
//     <label>
//       <span>Password</span>
//       <input type="password" />
//     </label>
//     <p class="forgot-pass">Forgot password?</p>
//     <button type="button" class="submit">Sign In</button>
//     <button type="button" class="fb-btn">Connect with <span>facebook</span></button>
//   </div>
//   <div class="sub-cont">
//     <div class="img">
//       <div class="img__text m--up">
//         <h2>New here?</h2>
//         <p>Sign up and discover great amount of new opportunities!</p>
//       </div>
//       <div class="img__text m--in">
//         <h2>One of us?</h2>
//         <p>If you already has an account, just sign in. We've missed you!</p>
//       </div>
//       <div class="img__btn">
//         <span class="m--up">Sign Up</span>
//         <span class="m--in">Sign In</span>
//       </div>
//     </div>
//     <div class="form sign-up">
//       <h2>Time to feel like home,</h2>
//       <label>
//         <span>Name</span>
//         <input type="text" />
//       </label>
//       <label>
//         <span>Email</span>
//         <input type="email" />
//       </label>
//       <label>
//         <span>Password</span>
//         <input type="password" />
//       </label>
//       <button type="button" class="submit">Sign Up</button>
//       <button type="button" class="fb-btn">Join with <span>facebook</span></button>
//     </div>
//   </div>
// </div>

// <a href="https://dribbble.com/shots/3306190-Login-Registration-form" target="_blank" class="icon-link">
//   <img src="http://icons.iconarchive.com/icons/uiconstock/socialmedia/256/Dribbble-icon.png"/>
// </a>
// <a href="https://twitter.com/NikolayTalanov" target="_blank" class="icon-link icon-link--twitter">
//   <img src="https://cdn1.iconfinder.com/data/icons/logotypes/32/twitter-128.png"/>
// </a>
// </div>