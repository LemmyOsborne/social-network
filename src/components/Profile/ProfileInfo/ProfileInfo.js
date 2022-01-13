import s from "../Profile.module.css";
import Preloader from "../../common/Preloader";

function ProfileInfo(props) {
    if (!props.profile) {
        return <Preloader/>
    }
    return (
        <div className={s.profile}>
            <div>
                <img src={props.profile.photos.large}/>
            </div>
            <div className={s.profile_description}>
                <div className={s.name}>{props.profile.fullName}</div>
                <div className={s.item}>About me: {props.profile.aboutMe}</div>
                {props.profile.lookingForAJob ? <div>Looking for a job</div> : <div>No need in a job</div>}
            </div>
        </div>
    )
}

export default ProfileInfo;