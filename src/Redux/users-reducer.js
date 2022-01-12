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
    isFetching: false
}


const usersReducer = (state = initialState, action) => {
    debugger
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
        default:
            return state
    }
}

export const follow = (userId) => ({type: FOLLOW, userId});
export const unfollow = (userId) => ({type: UNFOLLOW, userId});
export const setUsers = (users) => ({type: SET_USERS, users});
export const getTotalCount = (totalCount) => ({type: GET_TOTAL_COUNT, totalCount});
export const setCurrentPage = (currentPage) => ({type: SET_CURRENT_PAGE, currentPage});
export const toggleIsFetching = (isFetching) => ({type: TOGGLE_IS_FETCHING, isFetching});


export default usersReducer;