import React from 'react';
import { Link } from 'react-router-dom';

const Resistation = () => {
    return (
        <div className='form-head'>
            <div>
                <h1>Resistation Form</h1>
                <form onSubmit="">
                <input type="email" name="email" id=""  placeholder='Enter Your Email' />
                    <br />
                    <input type="password"  name='password' placeholder='Enter Your Password'/>
                    <br />
                    <input type="password"  name='re-password' placeholder='Enter Your Re Password'/>
                    <br />
                    <input type="submit" value="Login" />
                </form>
                <p>Already Have An Account? <Link to="/login"></Link></p>
                <div>......................................</div>
                <div className="btn btn-regukar">Sign In With Google</div>
            </div>
        </div>
    );
};

export default Resistation;