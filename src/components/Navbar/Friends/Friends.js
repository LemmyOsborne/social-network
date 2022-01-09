import Friend from "./Friend/Friend";
import s from "./Friends.module.css"


function Friends(props) {
    let friendsElements = props.state.friends.map(friend => <Friend id={friend.id} name={friend.name} />)
    return (
        <div className={s.friends}>
            <h2 className={s.friends_title}>Friends</h2>
            <div className={s.friends_item}>
            {friendsElements}
            </div>
        </div>
    )
}

export default Friends;