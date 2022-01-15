import {profileAPI} from "../api/api";

const ADD_POST = "ADD-POST";
const UPDATE_NEW_POST_TEXT = "UPDATE-POST-TEXT";
const SET_PROFILE = "SET-PROFILE";
const SET_USER_STATUS = "SET-USER-STATUS";



let initialState = {
    posts: [
        {id: 1, message: "This is my second post!"},
        {id: 2, message: "This is my first post!"}
    ],
    newPostText: "",
    profile: null,
    status: ""
}



const profileReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_POST:
            let newPost = {
                id: 5,
                message: state.newPostText
            };
            return {
                ...state,
                posts: [...state.posts, newPost],
                newPostText: ""
            };
        case UPDATE_NEW_POST_TEXT:
            return {
                ...state,
                newPostText: action.newText
            };
        case SET_PROFILE:
            return {
                ...state,
                profile: action.profile
            }
        case SET_USER_STATUS:
            return {
                ...state,
                status: action.status
            }
        default:
            return state;
    }

}

export const addPostActionCreator = () => ({type: ADD_POST})
export const updatePostTextActionCreator = (text) => ({type: UPDATE_NEW_POST_TEXT, newText: text})
export const setProfile = (profile) => ({type: SET_PROFILE, profile})
export const setUserStatus = (status) => ({type: SET_USER_STATUS, status})



export const getUserProfileThunk = (userId) => {
    return (dispatch) => {
        profileAPI.getUserProfile(userId)
                .then(data => {
                    dispatch(setProfile(data))
                })
    }
}

export const getUserStatusThunk = (userId) => {
    return (dispatch) => {
        profileAPI.getUserStatus(userId)
            .then(data => {
                dispatch(setUserStatus(data))
            })
    }
}

export const updateUserStatusThunk = (status) => {
    return (dispatch) => {
        profileAPI.updateUserStatus(status)
            .then(data => {
                if (data.resultCode === 0)
                dispatch(setUserStatus(status))
            })
    }
}



export default profileReducer;
