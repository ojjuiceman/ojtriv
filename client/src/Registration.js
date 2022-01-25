import React from "react";
import './Auth.css';
import {Link} from "react-router-dom"




function Registration() {

return (
  <div className="registration">
  <nav className="main-nav">
		<br></br>

		{/* <div id="sign-up-thing"> */}
		{/* <Link className="signin" href="#0" to="/Login">Sign in</Link> */}

		<div className="welcome">Welcome to TriviApp! Sign up to See How You Stack up Against Your Peers!</div>
		{/* <Link className="signup" href="#0" to="/Signup">Sign up</Link> */}
		{/* </div> */}


		<br></br>
		{/* <div className="test"> Test Your Knowledge on a Variety of Topics and See How You Stack up Against Your Peers! </div> */}

<div className="yo">
	<ul className="youall">
<div className="hi">

		<li><Link className="signin" href="#0" to="/Login">Sign in</Link></li>
		<li><Link className="signup" href="#0" to="/Signup">Sign up</Link></li>
		</div>

	</ul>
	</div>


</nav>

<div className="user-modal">
		<div className="user-modal-container">
			<ul className="switcher">
      <li><a href="#0">Sign in</a></li>
				<li><a href="#0">New account</a></li>
			</ul>


			<div id="reset-password">
				<p className="form-message">Lost your password? Please enter your email address.<br></br> You will receive a link to create a new password.</p>

				<form className="form">
					<p className="fieldset">
						<label className="image-replace email" for="reset-email">E-mail</label>
						<input className="full-width has-padding has-border" id="reset-email" type="email" placeholder="E-mail"/>
						<span className="error-message">An account with this email does not exist!</span>
					</p>

					<p className="fieldset">
						<input className="full-width has-padding" type="submit" value="Reset password"/>
					</p>
				</form>

				<p className="form-bottom-message"><a href="#0">Back to log-in</a></p>
			</div>
			<a href="#0" className="close-form">Close</a>
		</div>
	</div>
  </div>

  );
}

export default Registration;


{/* <form action="#" method="post">
  <h2>Sign Up</h2>
		<p>
			<label for="Email" className="floatLabel">Email</label>
			<input id="Email" name="Email" type="text"/>
		</p>
		<p>
			<label for="password" class="floatLabel">Password</label>
			<input id="password" name="password" type="password"/>
			<span>Enter a password longer than 8 characters</span>
		</p>
		<p>
			<label for="confirm_password" class="floatLabel">Confirm Password</label>
			<input id="confirm_password" name="confirm_password" type="password"/>
			<span>Your passwords do not match</span>
		</p>
		<p>
			<input type="submit" value="Create My Account" id="submit"/>
		</p>
	</form> */}