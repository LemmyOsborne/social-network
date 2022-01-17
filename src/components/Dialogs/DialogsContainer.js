import {addMessage} from "../../Redux/dialogs-reducer";
import {connect} from "react-redux";
import withAuthRedirect from "../../hoc/withAuthRedirect";
import Dialogs from "./Dialogs";
import {compose} from "redux";

const DialogsContainer = (props) => {
    return <Dialogs {...props}/>
}

const mapStateToProps = (state) => {
    return {
        dialogs: state.dialogsPage.dialogs,
        messages: state.dialogsPage.messages,
        newMessageText: state.dialogsPage.newMessageText
    }
}

export default compose(withAuthRedirect, connect(mapStateToProps, {addMessage}))(DialogsContainer)

