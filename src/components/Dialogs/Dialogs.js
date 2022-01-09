import s from "./Dialogs.module.css"
import Dialog from "./Dialog/Dialog";
import Message from "./Message/Message";
import React from "react";



function Dialogs(props) {

    let dialogsElements = props.dialogs.map(dialog => <Dialog name={dialog.name} id={dialog.id} />);

    let messagesElements = props.messages.map(message => <Message id={message.id} message={message.message}  />)

    return (
        <div className={s.dialogs}>
            <div className={s.dialogs_items}>
                {dialogsElements}
            </div>
            <div className={s.messages}>
                {messagesElements}
                <textarea onChange={props.onChangeMessage} value={props.newMessageText} />
                <button onClick={props.addMessage}>Add message</button>
            </div>
        </div>
    )

}

export default Dialogs;