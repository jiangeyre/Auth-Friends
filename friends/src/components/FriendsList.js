import React, { useState, useEffect } from 'react';
import { axiosWithAuth } from '../utils/axiosWithAuth.js';
import FriendCard from './FriendCard.js';
import AddFriendForm from './AddFriendForm.js';

const FriendsList = () => {
    const [friends, setFriends] = useState([]);

    useEffect(() => {
        axiosWithAuth()
        .get(`http://localhost:5000/api/friends`)
        .then(res => {
            console.log(res);
            setFriends(res.data);
        })
        .catch(err => console.log(err));
    }, []);

    return (
        <section>
            <h1>Friends List:</h1>
            <div className='friends-list'>
            {
                friends.map(friend => {
                return <FriendCard key={friend.id} friend={friend} />
                })
            }
            </div>
            <AddFriendForm setFriends={setFriends}/>
        </section>
    );
};

export default FriendsList;