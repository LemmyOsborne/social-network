import {authAPI} from "../api/api";

const SET_AUTH_USER = "SET-AUTH-USER";
const ERROR = "ERROR";

const initialState = {
    id: null,
    email: null,
    login: null,
    isAuth: false,
    error: null
}


const authReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_AUTH_USER:
            return {
                ...state,
                ...action.data,
                isAuth: true
            }
        case ERROR:
            return {
                ...state,
                error: [...action.error]
            }
        default:
            return state
    }
}

const setAuthUserData = (id, email, login, isAuth) => ({type: SET_AUTH_USER, data: {id, email, login, isAuth}});
const handleError = (error) => ({type: ERROR, error})

export const getAuthUserThunk = () => async (dispatch) => {
    let data = await authAPI.getAuthUser()
    if (data.resultCode === 0) {
        let {id, login, email} = data.data
        dispatch(setAuthUserData(id, email, login, true))
    }
}


export const loginUserThunk = (loginData) => async (dispatch) => {
    let data = await authAPI.loginUser(loginData)
    if (data.resultCode === 0) {
        dispatch(setAuthUserData())
    } else {
        dispatch(handleError(data.messages))
    }

}

export const logoutUserThunk = () => async (dispatch) => {
    let data = await authAPI.logoutUser()
    if (data.resultCode === 0) {
        dispatch(setAuthUserData(null, null, null, false))
    }
}


export default authReducer;