import {getAuthUserThunk} from "./authReducer";

const INITIALIZED = "INITIALIZED"

const initialState = {
    initialized: false
}

export const appReducer = (state = initialState, action) => {
    switch (action.type) {
        case INITIALIZED:
            return {
                ...state,
                initialized: true
            }
        default:
            return state
    }
}

const initializeSuccess = () => ({type: INITIALIZED})

export const initializeApp = () => async (dispatch) => {
    await dispatch(getAuthUserThunk())
     dispatch(initializeSuccess())
}