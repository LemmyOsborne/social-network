import {useForm} from "react-hook-form";
import {connect} from "react-redux";
import {loginUserThunk} from "../../Redux/authReducer";


const LoginForm = (props) => {

    const {register, handleSubmit} = useForm()

    const onSubmit = (data) => {props.loginUserThunk(data)}
    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <div>
                <input placeholder="email" {...register("email",{required: true})} />
            </div>
            <div>
                <input placeholder="password" {...register("password",{required: true})} />
            </div>
            <div>
                <input type="checkbox" {...register("rememberMe")}/> remember me
            </div>
            <div>
                <button type="submit">Log in</button>
            </div>
        </form>
    )
}


export default connect(null, {loginUserThunk})(LoginForm);

