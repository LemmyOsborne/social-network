import s from "./Dialogs.module.css"
import Dialog from "./Dialog/Dialog";
import Message from "./Message/Message";
import React from "react";
import {useForm} from "react-hook-form";


function Dialogs(props) {

    let dialogsElements = props.dialogs.map(dialog => <Dialog name={dialog.name} key={dialog.id} id={dialog.id}/>);

    let messagesElements = props.messages.map(message => <Message message={message.message} key={message.id}
                                                                  id={message.id}/>)

    const {register, handleSubmit} = useForm()
    const onSubmit = (message) => props.addMessage(message)

    return (
        <div className={s.dialogs}>
            <div className={s.dialogs_items}>
                {dialogsElements}
            </div>
            <div className={s.messages}>
                {messagesElements}
                <form onSubmit={handleSubmit(onSubmit)}>
                    <textarea {...register("message")}/>
                    <button>Add message</button>
                </form>
            </div>
        </div>
    )

}

export default Dialogs;