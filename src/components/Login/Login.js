import React from 'react';
import { useLocation } from 'react-router-dom';
import { useHistory } from 'react-router-dom';
import { Link } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';
import useFirebase from '../../hooks/useFirebase';
import  "./Login.css"
const Login = () => {
    const {user, handleSignInWithGoogle} = useAuth();
    const location = useLocation();
const history= useHistory();
const redirect_uri = location.state.from || "/home";
const googleSignInHandle= ()=>{
    handleSignInWithGoogle()
    .then(result=>{
      
        history.push(redirect_uri)
        
    })
}
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
                <button className="btn btn-regular" onClick={googleSignInHandle}>Sign In With Google</button>
                <br />

            </div>
        </div>
    );
};

export default Login;