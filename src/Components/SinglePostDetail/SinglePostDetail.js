import React from 'react';

const SinglePostDetail = ({ detail }) => {
    const { body, title } = detail;
    return (
        <div>
            <p>{title}</p>
            <p>{body}</p>
        </div>
    );
};

export default SinglePostDetail;