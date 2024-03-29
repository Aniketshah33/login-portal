import React, { useState } from "react";

export const Login = (props) => {
    const [email, setEmail] = useState('');
    const [uni, setuni] = useState('');
    const [pass, setPass] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(email);
    }

    return (
        <div className="auth-form-container">
            <div><img src="https://patancollege.edu.np/wp-content/uploads/2019/12/2019-12-09-new-PCPS_logo-151x61.png"></img> </div>
            <h2>Login Portal</h2>
            <form className="login-form" onSubmit={handleSubmit}>
                <label htmlFor="email">Email</label>
                <input value={email} onChange={(e) => setEmail(e.target.value)}type="email" placeholder="youremail@gmail.com" id="email" name="email" />
                <label htmlFor="University ID">University ID</label>
                <input value={uni} onChange={(e) => setuni(e.target.value)}type="number" placeholder="your uni id" id="number" name="U" />
                <label htmlFor="password">Password</label>
                <input value={pass} onChange={(e) => setPass(e.target.value)} type="password" placeholder="********" id="password" name="password" />
                <button type="submit">Log In</button>
            </form>
            {/* <button className="link-btn" onClick={() => props.onFormSwitch('register')}>Don't have an account? Register here.</button> */}
        </div>
    )
}