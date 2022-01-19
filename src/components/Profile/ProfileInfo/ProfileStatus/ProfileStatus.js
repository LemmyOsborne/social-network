import React, {useState} from "react";

function ProfileStatus(props) {

    const [editMode, setEditMode] = useState(false)
    const [status, setStatus] = useState(props.status)

    const activateEditMode = () => {
        setEditMode(true)
    }

    const deactivateEditMode = () => {
        setEditMode(false)
        props.updateUserStatusThunk(status)
    }

    const onStatusChange = (e) => {
        setStatus(e.target.value)
    }

    return (
        <div>
            {!editMode ?
                <div>
                    <span onClick={activateEditMode}>{props.status || "Edit your status"}</span>
                </div>
                :
                <div>
                    <input  onBlur={deactivateEditMode}
                            onChange={onStatusChange}
                           autoFocus={true}
                            value={status}
                    />
                </div>
            }
        </div>
    )
}


export default ProfileStatus;