import s from "./User.module.css"
import userPhoto from "../../../assets/user.png"
import {NavLink} from "react-router-dom";
import axios from "axios";

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
                            axios.delete("https://social-network.samuraijs.com/api/1.0/follow/" + props.user.id, {
                                withCredentials: true,
                                headers: {
                                    "API-KEY": "f9f2b78b-33a5-4bb1-8984-36609ada0956"
                                }

                            })
                                .then(response => {
                                    if (response.data.resultCode === 0) {
                                        props.unfollow(props.user.id)
                                    }
                                })
                        }>Unfollow</button>

                        : <button className={s.button} onClick={() =>
                            axios.post("https://social-network.samuraijs.com/api/1.0/follow/" + props.user.id, {}, {
                                withCredentials: true,
                                headers: {
                                    "API-KEY": "f9f2b78b-33a5-4bb1-8984-36609ada0956"
                                }
                            })
                                .then(response => {
                                    if (response.data.resultCode === 0) {
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