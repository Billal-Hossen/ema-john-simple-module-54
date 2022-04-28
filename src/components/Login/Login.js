import React from 'react';
import { Link } from 'react-router-dom';
import  "./Login.css"
const Login = () => {
    return (
        <div className='form-head'>
            <div>
                <h1>Login Form</h1>
                <form onSubmit="">
                    <input type="email" name="email" id=""  placeholder='Enter Your Email' />
                    <br />
                    <input type="password"  name='password' placeholder='Enter Your Password'/>
                    <br />
                    <input type="submit" value="Login" />
                </form>
                <p>Need Resistation? <Link to="/resistation"></Link></p>
                <div>......................................</div>
                <div className="btn btn-regukar">Sign In With Google</div>
                <br />

            </div>
        </div>
    );
};

export default Login;