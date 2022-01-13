import axios from "axios";
import {connect} from "react-redux";
import {setProfile} from "../../../Redux/profile-reducer";
import ProfileInfo from "./ProfileInfo";
import React from "react";
import {withRouter} from "react-router-dom";



class ProfileInfoContainer extends React.Component{
    componentDidMount() {
        let userId = this.props.match.params.userId || "2"
        axios.get("https://social-network.samuraijs.com/api/1.0/profile/" + userId)
            .then(response => {
                this.props.setProfile(response.data)
            })
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

export default connect(mapStateToProps, {setProfile})(withRouter(ProfileInfoContainer))