import User from "./User/User";
import * as axios from "axios";
import React from "react";

class Users extends React.Component {
    constructor(props) {
        super(props);
        if (props.users.length === 0) {
            axios.get("https://social-network.samuraijs.com/api/1.0/users").then(response => {
                this.props.setUsers(response.data.items)
            });
        }
    }

    render() {
        return (
            <div>
                {this.props.users.map((user, index) => <User key={index} user={user} unfollow={this.props.unfollow}
                                                             follow={this.props.follow}/>)}
            </div>
        )
    }
}

export default Users;