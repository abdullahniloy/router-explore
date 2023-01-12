import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Friends from '../Friend/Friends';

const Friend = () => {
    const friends = useLoaderData();
    //console.log(friends)
    return (
        <div>
            <p>I am your friend:{friends.length}</p>
            {
                friends.map(friend => <Friends
                    key={friend.id}
                    friend={friend}></Friends>)
            }
        </div>
    );
};

export default Friend;