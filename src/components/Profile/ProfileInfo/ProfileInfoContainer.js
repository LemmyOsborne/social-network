import {connect} from "react-redux";
import {getUserProfileThunk} from "../../../Redux/profile-reducer";
import ProfileInfo from "./ProfileInfo";
import React from "react";
import {withRouter} from "react-router-dom";



class ProfileInfoContainer extends React.Component{
    componentDidMount() {
        let userId = this.props.match.params.userId || "2"
        this.props.getUserProfileThunk(userId)
    }
    render() {
        return <ProfileInfo {...this.props} />
    }
}

let mapStateToProps = (state) => {
    return {
        profile: state.profilePage.profile
    }
}

export default connect(mapStateToProps, {getUserProfileThunk})(withRouter(ProfileInfoContainer))