import {connect} from "react-redux";
import {
    toggleIsFetching,
    setCurrentPage, toggleInProgress, getUsersThunk, unfollowThunk, followThunk
} from "../../Redux/users-reducer";
import Users from "./Users";
import React from "react";
import Preloader from "../common/Preloader";


class UsersContainer extends React.Component {
    componentDidMount() {
            this.props.getUsersThunk(this.props.currentPage, this.props.count)
    }

    onPageChanged = (page) => {
        this.props.setCurrentPage(page);
        this.props.getUsersThunk(page, this.props.count)
    }

    render() {
        return <>
            {this.props.isFetching ? <Preloader/> : null}
            <Users users={this.props.users}
                   totalCount={this.props.totalCount}
                   count={this.props.count}
                   currentPage={this.props.currentPage}
                   onPageChanged={this.onPageChanged}
                   follow={this.props.followThunk}
                   unfollow={this.props.unfollowThunk}
                   followInProgress={this.props.followInProgress}
            />
        </>
    }
}


const mapStateToProps = (state) => {
    return {
        users: state.usersPage.users,
        totalCount: state.usersPage.totalCount,
        count: state.usersPage.count,
        currentPage: state.usersPage.currentPage,
        isFetching: state.usersPage.isFetching,
        followInProgress: state.usersPage.followInProgress
    }
}

export default connect(mapStateToProps, {
    setCurrentPage,
    toggleIsFetching,
    getUsersThunk,
    unfollowThunk,
    followThunk
})(UsersContainer);

