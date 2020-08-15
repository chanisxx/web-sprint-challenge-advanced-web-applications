import React, { useState } from 'react';
import axios from 'axios';

  // make a post request to retrieve a token from the api
  // when you have handled the token, navigate to the BubblePage route

const Login = props => {
    const [credentials, setCredentials] = useState(
        {username:'', password: ''}
    );
    const [error, setError] = useState(false);
   
    const handleChanges = e => {
        setCredentials({...credentials, [e.target.name]: e.target.value});
    };

    const loginSubmit = e => {
        e.preventDefault();
            axios
            .post('http://localhost:5000/api/login', credentials)
            .then(res => {
                console.log('login success! res:', res);
                window.localStorage.setItem('token', res.data.payload);
                props.history.push('/bubbles-page');
                setError(false);
            })
            .catch(err => {
                console.error('login failure! err:', err.message);
                localStorage.removeItem('authToken');
                setError(true);
            })
    };

    return (
        <div>
           
             <div className='login-form'>
                <h1 className='header'>
                    Sign in
                </h1>
                <form onSubmit={loginSubmit} className='input-cont log'>
                    <label htmlFor='username'>Username</label>
                    <input
                    name='username'
                    type='text'
                    value={credentials.username}
                    onChange={handleChanges}
                    className='input'
                    />
    
                    <label htmlFor='password'>Password</label>
                    <input
                    name='password'
                    type='password'
                    value={credentials.password}
                    onChange={handleChanges}
                    className='input'
                    />
                      <button className='btn'>SIGN IN</button>
                      {error ? <p className='error-login'>Wrong credentials, Try again.</p> : null}
                </form>
            </div>
            <div className='bubble blue'></div>
            <div className='bubble pink'></div>
            <div className='bubble red'></div>
            
        </div>
    );
};

export default Login;

