const SET_AUTH_USER = "SET-AUTH-USER";

const initialState = {
    id: null,
    email: null,
    login: null,
    isAuth: false
}


const authReducer = (state= initialState, action) => {
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

export default authReducer;