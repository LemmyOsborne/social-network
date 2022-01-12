import {connect} from "react-redux";
import {followAC, getTotalCountAC, setCurrentPageAC, setUsersAC, unfollowAC} from "../../Redux/users-reducer";
import Users from "./Users";

const mapStateToProps = (state) => {
    return {
        users: state.usersPage.users,
        totalCount: state.usersPage.totalCount,
        count: state.usersPage.count,
        currentPage: state.usersPage.currentPage
    }
}

const mapDispatchToProps = (dispatch) => {
    debugger
    return {
        follow: (userId) => {
            let action = followAC(userId);
            dispatch(action)
        },
        unfollow: (userId) => {
            let action = unfollowAC(userId);
            dispatch(action)
        },
        setUsers: (users) => {
            let action = setUsersAC(users);
            dispatch(action)
        },
        getTotalCount: (totalCount) => {
            let action = getTotalCountAC(totalCount);
            dispatch(action)
        },
        setCurrentPage: (currentPage) => {
            let action = setCurrentPageAC(currentPage);
            dispatch(action)
        }
    }
}


const UsersContainer = connect(mapStateToProps, mapDispatchToProps)(Users);

export default UsersContainer;