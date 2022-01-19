import s from "../Profile.module.css";
import Preloader from "../../common/Preloader";
import userPhoto from "../../../assets/user.png"
import ProfileStatus from "./ProfileStatus/ProfileStatus";


const ProfileInfo = (props) => {
    if (!props.profile) {
        return <Preloader/>
    }
    return (
        <div className={s.profile}>
            <div>
                <img className={s.profilePhoto} src={props.profile.photos.large == null ? userPhoto : props.profile.photos.large }/>
            </div>
            <div className={s.profile_description}>
                <div className={s.name}>{props.profile.fullName}</div>
                <ProfileStatus updateUserStatusThunk={props.updateUserStatusThunk} status={props.status}/>
            </div>
        </div>
    )
}

export default ProfileInfo;