import React from 'react';
import './Friends.css'
import { Link } from 'react-router-dom';

const Friends = ({ friend }) => {
    const { id, name, email, username } = friend;
    return (
        <div className='friend'>
            <h2>Name:{name}</h2>
            <h4>Email:{email}</h4>
            <small>Username:<Link to={`/friend ${id}`}>{username}</Link></small>
        </div>
    );
};

export default Friends;