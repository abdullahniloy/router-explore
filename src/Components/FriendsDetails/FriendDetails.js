import React from 'react';
import { useLoaderData } from 'react-router-dom';

const FriendDetails = () => {
    const friend = useLoaderData();
    //  console.log(frined);
    return (
        <div>
            <h1>Friend Details Page</h1>
            <p>Call him/her:{friend.phone}</p>
            <p>Name:{friend.name}</p>
        </div>
    );
};

export default FriendDetails;