import s from "./User.module.css"
import userPhoto from "../../../assets/user.png"
import {NavLink} from "react-router-dom";
import {usersAPI} from "../../../api/api";

const User = (props) => {
    return (
        <div>
            <div className={s.user}>
                <div>
                    <div>
                        <NavLink to={"/profile/" + props.user.id}>
                            <img className={s.userPhoto}
                                 src={props.user.photos.small != null ? props.user.photos.small : userPhoto}/>
                        </NavLink>
                    </div>
                </div>
                <div className={s.description}>
                    <div>
                        <div className={s.name}>
                            {props.user.name}
                        </div>
                        <div>
                            <h4 className={s.statusHeader}>Status:</h4>
                            {props.user.status != null ? props.user.status : "Here might be status"}
                        </div>
                    </div>
                </div>
                <div>
                    {props.user.followed ?

                        <button className={s.button} onClick={() =>
                            usersAPI.unfollow(props.user.id)
                                .then(data => {
                                    if (data.resultCode === 0) {
                                        props.unfollow(props.user.id)
                                    }
                                })
                        }>Unfollow</button>

                        : <button className={s.button} onClick={() =>
                            usersAPI.follow(props.user.id)
                                .then(data => {
                                    if (data.resultCode === 0) {
                                        props.follow(props.user.id)
                                    }
                                })
                        }>Follow</button>
                    }


                </div>
            </div>
        </div>
    )
}

export default User;