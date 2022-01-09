const ADD_POST = "ADD-POST";
const UPDATE_NEW_POST_TEXT = "UPDATE-POST-TEXT";

export const addPostActionCreator = () => ({type: ADD_POST})
export const updatePostTextActionCreator = (text) => ({type: UPDATE_NEW_POST_TEXT, newText: text})

let initialState = {
    profilePage: {
        posts: [
            {id: 1, message: "This is my second post!"},
            {id: 2, message: "This is my first post!"}
        ],
        newPostText: ""
    }

}

const profileReducer = (state=initialState, action) => {
    switch (action.type) {
        case ADD_POST: {
            let newPost = {
                id: 5,
                message: state.newPostText
            };
            let stateCopy = {...state};
            stateCopy.posts.push(newPost);
            stateCopy.newPostText = "";
            return stateCopy;
        }
        case UPDATE_NEW_POST_TEXT: {
            let stateCopy = {...state};
            stateCopy.newPostText = action.newText;
            return stateCopy;
        }
        default:
            return state;
    }

}

export default profileReducer;
