const SET_AUTH_USER = "SET-AUTH-USER";
const SET_AUTH_USER_PHOTO = "SET-AUTH-USER-PHOTO";

const initialState = {
    id: null,
    email: null,
    login: null,
    isAuth: false,
    authUserPhoto: null
}


const authReducer = (state= initialState, action) => {
    debugger
    switch (action.type) {
        case SET_AUTH_USER:
            return {
                ...state,
                ...action.data,
                isAuth: true
            }
        default:
            return state
    }
}

export const setAuthUserData = (id, email, login) => ({type: SET_AUTH_USER, data: {id, email, login}});
export const setAuthUserPhoto = () => ({type: SET_AUTH_USER_PHOTO})

export default authReducer;