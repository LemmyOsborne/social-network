import User from "./User/User";
import React from "react";
import s from "./Users.module.css";


let Users = (props) => {
    let totalPages = Math.ceil(props.totalCount / props.count)
    let pages = [];
    for (let i = 1; i <= totalPages; i++) {
        pages.push(i);
    }
    return (
        <div>
            {pages.slice(0, 30).map((page, index) => <span key={index}
                                                           className={props.currentPage === page ? s.currentPage : ""}
                                                           onClick={() => props.onPageChanged(page)}>{page}</span>)}
            {props.users.map((user, index) => <User key={index} user={user} unfollow={props.unfollow}
                                                    follow={props.follow}/>)}
        </div>
    )
}


export default Users;