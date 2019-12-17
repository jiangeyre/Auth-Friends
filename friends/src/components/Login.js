import React, { useState } from 'react';
import axios from 'axios';

const Login = (props) => {
    const [ user, setUser ] = useState({
        username: '',
        password: ''
    });

    const handleChanges = e => {
        setUser({...user, [e.target.value]: e.target.value})
    };

    const handleSubmit = e => {
        e.preventDefault();
        login(user);
    };

    const login = user => {
        axios
            .post('http://localhost:5000/api/login', user)
            .then(res => {
                localStorage.setItem('token', res.data.payload);
                props.history.push('/friends');
            })
            .catch(err => console.log(err));
    };

    return (
        <form className='login-form' onSubmit={handleSubmit}>
            <input type="text" name="username" id="username" placeholder="Enter username." value={user.username} onChange={handleChanges} />
            <input type="text" name="password" id="password" placeholder="Enter password." value={user.password} onChange={handleChanges} />
            <button>Login.</button>
        </form>
    )
};

export default Login;
