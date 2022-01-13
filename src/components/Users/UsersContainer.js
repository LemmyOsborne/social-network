import {connect} from "react-redux";
import {
    follow,
    getTotalCount,
    toggleIsFetching,
    setCurrentPage,
    setUsers,
    unfollow
} from "../../Redux/users-reducer";
import Users from "./Users";
import React from "react";
import * as axios from "axios";
import Preloader from "../common/Preloader";


class UsersContainer extends React.Component {
    componentDidMount() {
        this.props.toggleIsFetching(true)
        if (this.props.users.length === 0) {
            axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.count}`,{
                withCredentials: true
            })
                .then(response => {
                    this.props.toggleIsFetching(false)
                    this.props.setUsers(response.data.items);
                    this.props.getTotalCount(response.data.totalCount);
                })
        }

    }

    // Использую колбек в классовом компоненте, чтобы не терялся контекст вызова
    onPageChanged = (page) => {
        this.props.toggleIsFetching(true)
        this.props.setCurrentPage(page);
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${page}&count=${this.props.count}`,{
            withCredentials: true
        })
            .then(response => {
                this.props.toggleIsFetching(false)
                this.props.setUsers(response.data.items);
            })
    }

    render() {
        return <>
            {this.props.isFetching ? <Preloader/> : null}
            <Users users={this.props.users}
                   totalCount={this.props.totalCount}
                   count={this.props.count}
                   currentPage={this.props.currentPage}
                   onPageChanged={this.onPageChanged}
                   follow={this.props.follow}
                   unfollow={this.props.unfollow}/>
        </>
    }
}


const mapStateToProps = (state) => {
    return {
        users: state.usersPage.users,
        totalCount: state.usersPage.totalCount,
        count: state.usersPage.count,
        currentPage: state.usersPage.currentPage,
        isFetching: state.usersPage.isFetching
    }
}

export default connect(mapStateToProps, {
    follow,
    unfollow,
    setUsers,
    getTotalCount,
    setCurrentPage,
    toggleIsFetching,
})(UsersContainer);

