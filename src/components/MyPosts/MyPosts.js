import s from "./MyPosts.module.css"
import Post from "./Post/Post";
import React from "react";

function MyPosts(props) {

    let postElements = props.posts.map(post => <Post id={post.id} message={post.message} />);

    return (
        <div>
            My posts
            <div>
                <textarea onChange={props.onPostChange} value={props.newPostText} />
                <button  onClick={props.addPost}>Add post</button>
            </div>
            {postElements}
        </div>
    )
}

export default MyPosts;