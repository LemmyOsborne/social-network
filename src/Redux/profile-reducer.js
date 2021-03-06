import {profileAPI} from "../api/api";

const ADD_POST = "ADD-POST";
const SET_PROFILE = "SET-PROFILE";
const SET_USER_STATUS = "SET-USER-STATUS";


let initialState = {
    posts: [
        {id: 1, postText: "This is my second post!"},
        {id: 2, postText: "This is my first post!"}
    ],
    profile: null,
    status: ""
}


const profileReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_POST:
            return {
                ...state,
                posts: [...state.posts, action.postText]
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

export const addPost = (postText) => ({type: ADD_POST, postText})
export const setProfile = (profile) => ({type: SET_PROFILE, profile})
export const setUserStatus = (status) => ({type: SET_USER_STATUS, status})


export const getUserProfileThunk = (userId) => async (dispatch) => {
    let data = await profileAPI.getUserProfile(userId)
    dispatch(setProfile(data))
}


export const getUserStatusThunk = (userId) => async (dispatch) => {
    let data = await profileAPI.getUserStatus(userId)
    dispatch(setUserStatus(data))
}

export const updateUserStatusThunk = (status) => async (dispatch) => {
    let data = await profileAPI.updateUserStatus(status)
    if (data.resultCode === 0)
        dispatch(setUserStatus(status))
}


export default profileReducer;
