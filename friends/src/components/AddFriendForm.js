import React, { useState } from 'react';
import { axiosWithAuth } from '../utils/axiosWithAuth.js';

const AddFriendForm = (props) => {
    const [newFriend, setNewFriend] = useState({name: "", age: undefined, email: ""});

    const handleChanges = (evt) => {
        setNewFriend({...newFriend, [evt.target.name]: evt.target.value});
    };

    const handleSubmit = (evt) => {
        evt.preventDefault();
        setNewFriend({...newFriend, id: Date.now()});
        AddFriend(newFriend);
    };

    const AddFriend = (friend) => {
        axiosWithAuth()
        .post(`http://localhost:5000/api/friends`, friend)
        .then(res => {
            console.log(res);
            props.setFriends(res.data);
        })
        .catch(err => console.log(err));
    };

    return (
        <form className='add-friend-form' onSubmit={handleSubmit}>
        <input required type="text" name='name' id='name' placeholder='name' value={newFriend.name} onChange={handleChanges} />
        <input required type="email" name='email' id='email' placeholder='email' value={newFriend.email} onChange={handleChanges} />
        <input required type="number" name='age' id='age' placeholder='age' value={newFriend.age} onChange={handleChanges} />
        <button>Add Friend.</button>
        </form>
    );
};

export default AddFriendForm;