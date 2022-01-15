import {addMessageActionCreator, updateMessageTextActionCreator} from "../../Redux/dialogs-reducer";
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

const mapDispatchToProps = (dispatch) => {
    return {
        addMessage: () => {
            let action = addMessageActionCreator();
            dispatch(action);
        },
        onChangeMessage: (e) => {
            let message = e.target.value;
            let action = updateMessageTextActionCreator(message);
            dispatch(action);
        }
    }
}

export default compose(withAuthRedirect, connect(mapStateToProps, mapDispatchToProps))(DialogsContainer)

