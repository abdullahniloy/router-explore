import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './SinglePost.css'

const SinglePost = ({ post }) => {
    const { id, body, title } = post;
    const navigate = useNavigate();
    const handleNavigate = () => {
        navigate(`/post/${id}`)
    }
    return (
        <div className='singlePost'>
            <p>Title:{title}</p>
            <p>Body:{body}</p>
            <Link to={`/post/${id}`}>Visit:{id}</Link>
            <Link to={`/post/${id}`}> <button>Details</button></Link>
            <button onClick={handleNavigate}>Show Details2</button>

        </div>
    );
};

export default SinglePost;