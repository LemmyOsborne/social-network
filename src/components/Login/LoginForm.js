import {useForm} from "react-hook-form";
import {connect} from "react-redux";
import {loginUserThunk} from "../../Redux/authReducer";
import s from "./LoginForm.css"


const LoginForm = (props) => {
    const {register, handleSubmit, formState: {errors}} = useForm()

    const onSubmit = (data) => {
        props.loginUserThunk(data)
    }

    if (props.error) {
        var errorMessage = props.error[0]
    }

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <label>
                Email:
                <input placeholder="email" {...register("email", {required: true})} />
            </label>
            <p>{errorMessage}</p>
            {(errors?.email && <p>You should enter your email</p>)}
            <div>
                <label>
                    Password:
                    <input placeholder="password" {...register("password", {required: true})} />
                </label>
                {(errors?.password && <p>You should enter your password</p>)}
            </div>
            <div>
                <input type="checkbox" {...register("rememberMe")}/> remember me
            </div>
            <div>
                <button>Log in</button>
            </div>
        </form>
    )
}

const mapStateToProps = (state) => {
    return {
        error: state.auth.error
    }
}

export default connect(mapStateToProps, {loginUserThunk})(LoginForm);

