import s from "./Profile.module.css"
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import MyPostsContainer from "../MyPosts/MyPostsContainer";



function Profile() {
    return (
        <div>
            <div className={s.top_image}>
                <img
                    src="https://images.ctfassets.net/hrltx12pl8hq/3BkYwz5RAnnN1Q2k7FYMir/5bc8172b8597e5c3d7fe02daa15dd371/Flex_lite_CMS_LIHP.jpg?fit=fill&w=840&h=350"
                />
            </div>
            <ProfileInfo />
            <MyPostsContainer  />
        </div>
    );
}

export default Profile;

