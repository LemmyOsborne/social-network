import {NavLink} from "react-router-dom";
import {connect} from "react-redux";
import {logoutUserThunk} from "../../Redux/authReducer";
import {useForm} from "react-hook-form";

function Settings(props) {
    const {handleSubmit} = useForm()

    const onSubmit = () => {
        props.logoutUserThunk()
    }
    return (
        <div>
            <form onSubmit={handleSubmit(onSubmit)}>
                <button type="submit">Log out</button>
            </form>
        </div>
    )
}

export default connect(null, {logoutUserThunk})(Settings);

