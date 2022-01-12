import s from "./User.module.css"
import userPhoto from "../../../assets/user.png"

const User = (props) => {
    return (
        <div>
            <div className={s.user}>
                <div>
                    <div>
                        <img className={s.userPhoto}
                             src={props.user.photos.small != null ? props.user.photos.small : userPhoto}/>
                    </div>
                </div>
                <div className={s.description}>
                    <div>
                        <div className={s.name}>
                            {props.user.name}
                        </div>
                        <div>
                            <h4 className={s.statusHeader}>Status:</h4>
                            {props.user.status != null ? props.user.status : "Here might be status" }
                        </div>
                    </div>
                </div>
                <div>
                    {props.user.followed ? (
                            <button className={s.button} onClick={() => props.unfollow(props.user.id)}>Unfollow</button>)
                        : (<button className={s.button} onClick={() => props.follow(props.user.id)}>Follow</button>)}
                </div>
            </div>
        </div>
    )
}

export default User;