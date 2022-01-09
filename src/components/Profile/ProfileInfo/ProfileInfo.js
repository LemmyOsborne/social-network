import s from "../Profile.module.css";

function ProfileInfo() {
    return (
        <div className={s.profile}>
            <img className={s.profile_photo} src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS6Nyy0MfiDsyf-29ZFPfI9wrWW6CCB665WyA&usqp=CAU" alt="profile-photo" />
            <div className={s.profile_description}>
                <div className={s.name}>Lemmy Osborne</div>
                <div className={s.item}>Date of birth: 27 December</div>
                <div className={s.item}>City: Nizhniy Tagil</div>
                <div className={s.item}>Education: UrFU 18'</div>
            </div>
        </div>
    )
}

export default ProfileInfo;