import s from "./MyPosts.module.css"
import Post from "./Post/Post";
import React from "react";
import {useForm} from "react-hook-form";

function MyPosts(props) {
    console.log("render")

    let postElements = props.posts.map((post, index) => <Post key={index} id={post.id} message={post.postText} />);

    const {register, handleSubmit} = useForm()
    const onSubmit = (postText) => props.addPost(postText)

    return (
        <div>
            My posts
            <form onSubmit={handleSubmit(onSubmit)}>
                <textarea {...register("postText")} />
                <button>Add post</button>
            </form>
            {postElements}
        </div>
    )
}

export default MyPosts;