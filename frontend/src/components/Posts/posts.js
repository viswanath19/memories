import React from 'react';
import useStyles from './styles';
import Post from './Post/post';

const Posts = () => {
    const classes = useStyles();
    return (
        <>
            <h3>Posts</h3>
            <Post/>
            <Post/>
        </>
    )
}

export default Posts;