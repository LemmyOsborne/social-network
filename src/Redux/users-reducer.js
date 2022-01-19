import {authAPI, usersAPI} from "../api/api";

const FOLLOW = "FOLLOW";
const UNFOLLOW = "UNFOLLOW";
const SET_USERS = "SET-USERS";
const GET_TOTAL_COUNT = "GET-TOTAL-COUNT";
const SET_CURRENT_PAGE = "SET-CURRENT-PAGE";
const TOGGLE_IS_FETCHING = "TOGGLE-IS-FETCHING";


let initialState = {
    users: [],
    totalCount: 0,
    count: 5,
    currentPage: 1,
    isFetching: false,
    followInProgress: []
}


const TOGGLE_IN_PROGRESS = "TOGGLE-IN-PROGRESS";
const usersReducer = (state = initialState, action) => {
    switch (action.type) {
        case FOLLOW:
            return {
                ...state,
                users: state.users.map(user => {
                    if (action.userId === user.id) {
                        return {...user, followed: true}
                    }
                    return user
                })
            }
        case UNFOLLOW:
            return {
                ...state,
                users: state.users.map(user => {
                    if (action.userId === user.id) {
                        return {...user, followed: false}
                    }
                    return user
                })
            }
        case SET_USERS:
            return {
                ...state,
                users: [...action.users]
            }
        case GET_TOTAL_COUNT:
            return {
                ...state,
                totalCount: action.totalCount
            }
        case SET_CURRENT_PAGE:
            return {
                ...state,
                currentPage: action.currentPage
            }
        case TOGGLE_IS_FETCHING:
            return {
                ...state,
                isFetching: action.isFetching
            }
        case TOGGLE_IN_PROGRESS:
            return {
                ...state,
                followInProgress: action.isFetching ? [...state.followInProgress, action.userId] : state.followInProgress.filter(id => id !== action.userId)
            }
        default:
            return state
    }
}

export const followSuccess = (userId) => ({type: FOLLOW, userId});
export const unfollowSuccess = (userId) => ({type: UNFOLLOW, userId});
export const setUsers = (users) => ({type: SET_USERS, users});
export const getTotalCount = (totalCount) => ({type: GET_TOTAL_COUNT, totalCount});
export const setCurrentPage = (currentPage) => ({type: SET_CURRENT_PAGE, currentPage});
export const toggleIsFetching = (isFetching) => ({type: TOGGLE_IS_FETCHING, isFetching});
export const toggleInProgress = (isFetching, userId) => ({type: TOGGLE_IN_PROGRESS, isFetching, userId});

export const getUsersThunk = (currentPage, count) => async (dispatch) => {
    dispatch(toggleIsFetching(true))
    let data = await usersAPI.getUsers(currentPage, count)
    dispatch(toggleIsFetching(false));
    dispatch(setUsers(data.items));
    dispatch(getTotalCount(data.totalCount));
}


export const unfollowThunk = (userId) => async (dispatch) => {
    dispatch(toggleInProgress(true, userId))
    let data = await usersAPI.unfollow(userId)
    if (data.resultCode === 0) {
        dispatch(unfollowSuccess(userId))
    }
    dispatch(toggleInProgress(false, userId))
}

export const followThunk = (userId) => async (dispatch) => {
    dispatch(toggleInProgress(true, userId))
    let data = await usersAPI.follow(userId)
    if (data.resultCode === 0) {
        dispatch(followSuccess(userId))
    }
    dispatch(toggleInProgress(false, userId))
}


export default usersReducer;