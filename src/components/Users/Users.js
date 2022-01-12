import User from "./User/User";
import * as axios from "axios";
import React from "react";
import s from "./Users.module.css";

class Users extends React.Component {
    componentDidMount() {
        if (this.props.users.length === 0) {
            axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.count}`)
                .then(response => {
                    this.props.setUsers(response.data.items);
                    this.props.getTotalCount(response.data.totalCount);
                })
        }

    }
    // Использую колбек в классовом компоненте, чтобы не терялся контекст вызова
    onPageChanged = (page) => {
        this.props.setCurrentPage(page);
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${page}&count=${this.props.count}`)
            .then(response => {
                this.props.setUsers(response.data.items);
            })
    }

    render() {
        let totalPages = Math.ceil(this.props.totalCount / this.props.count)
        let pages = [];
        for (let i = 1; i <= totalPages; i++) {
            pages.push(i);
        }
        return (
            <div>
                {pages.slice(0, 30).map((page, index) => <span key={index}
                                                  className={this.props.currentPage === page ? s.currentPage : ""}
                                                  onClick={() => this.onPageChanged(page)}>{page}</span>)}
                {this.props.users.map((user, index) => <User key={index} user={user} unfollow={this.props.unfollow}
                                                             follow={this.props.follow}/>)}
            </div>
        )
    }
}

export default Users;