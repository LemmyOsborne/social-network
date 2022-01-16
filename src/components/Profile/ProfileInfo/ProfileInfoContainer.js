import {connect} from "react-redux";
import {getUserProfileThunk, getUserStatusThunk, updateUserStatusThunk} from "../../../Redux/profile-reducer";
import ProfileInfo from "./ProfileInfo";
import React from "react";
import {withRouter} from "react-router-dom";
import {compose} from "redux";


class ProfileInfoContainer extends React.Component {
    componentDidMount() {
        let userId = this.props.match.params.userId || this.props.userId
        this.props.getUserProfileThunk(userId)
        this.props.getUserStatusThunk(userId)

    }

    render() {
        return <ProfileInfo {...this.props} />
    }
}

let mapStateToProps = (state) => {
    return {
        profile: state.profilePage.profile,
        status: state.profilePage.status,
        userId: state.auth.id
    }
}

export default compose(withRouter,
    connect(mapStateToProps, {getUserProfileThunk, getUserStatusThunk, updateUserStatusThunk}))
(ProfileInfoContainer)

