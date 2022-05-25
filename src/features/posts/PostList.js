import React, { useState } from 'react'
import { useGetPostsQuery } from '../api/apiSlice'

const PostExcerpt = ({ post }) => {
    return (
        <div>
            <p>{post.postText}</p>
            <p>
                <small>{post.author}</small>
            </p>
        </div>
    )
}

export const PostList = () => {
    const [skip, setSkip] = useState(true)
    const { data: posts = [], isLoading, isSuccess, isError, error } = useGetPostsQuery({ skip })

    let content

    if (isLoading) {
        content = <h3>Posts Loading ...</h3>
    } else if (isSuccess) {
        content = posts.map(post => <PostExcerpt key={post.id} post={post} />)
    } else if (isError) {
        content = (
            <div>
                <h3>Error happened</h3>
                <p>
                    <small>{error.toString()}</small>
                </p>
            </div>
        )
    }

    return (
        <div style={{ border: '2px solid red' }}>
            <h2>Posts:</h2>
            <button onClick={() => setSkip(prev => !prev)}>Fetch it</button>
            {content}
        </div>
    )
}
