import React from 'react'
import { useAddNewPostMutation } from '../api/apiSlice'
import { v4 as uniqueID } from 'uuid'

export const AddPostForm = () => {
    const [addNewPost, { isLoading }] = useAddNewPostMutation()
    const handleSendPost = async () => {
        if (!isLoading) {
            try {
                await addNewPost({
                    id: uniqueID(),
                    postText: '4Post text here!',
                    author: 'Alex',
                }).unwrap()
            } catch (err) {
                console.error('Failed to save the post: ', err)
            }
        }
    }

    return (
        <div>
            <h1>AddPostForm</h1>
            <button onClick={handleSendPost}>Send Post</button>
        </div>
    )
}
