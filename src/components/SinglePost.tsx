import * as React from 'react';

const SinglePost = ( post ) =>{
    const { id, title , body } = post;
    return (
        <div className="flex">
            <p>{id}</p>
            <p>{title}</p>
            <p>{body}</p>
        </div>
    );
};

export {SinglePost}