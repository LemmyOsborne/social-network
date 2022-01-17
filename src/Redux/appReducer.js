import {getAuthUserThunk} from "./authReducer";

const INITIALIZED = "INITIALIZED"

const initialState = {
    initialized: false
}

export const appReducer = (state = initialState, action) => {
    switch (action.type) {
        case INITIALIZED:
            return {
                initialized: true
            }
        default:
            return state
    }
}

const initializeApp = () => ({type: INITIALIZED})

export const initialize = () => async (dispatch) => {
    await dispatch(getAuthUserThunk())
    dispatch(initializeApp)
}