import React from 'react';
import { useLoaderData, useNavigate } from 'react-router-dom';


const PostDetails = () => {
    const postDetails = useLoaderData();
    console.log(postDetails);
    const navigate = useNavigate();
    const handleNavigate = () => {
        navigate(`/friend/${userId}`)
    }
    const { id, title, body, userId } = postDetails;
    return (
        <div>
            <h3>Post ID:{id}</h3>
            <h3>Title:{title}</h3>
            <h3>Body:{body}</h3>
            <button onClick={handleNavigate}>Get the Author</button>

        </div>
    );
};

export default PostDetails;