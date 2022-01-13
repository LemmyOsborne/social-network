import s from "./Header.module.css"
import {NavLink} from "react-router-dom";

function Header(props) {
    return (
        <header className={s.header}>
            <img src="https://1757140519.rsc.cdn77.org/static/v3/img/products/logo.png" alt="logo"/>
            <div className={s.login}>
                {props.isAuth ? props.login : <NavLink to={"/login"}>Login</NavLink>}
            </div>
        </header>
    );
}

export default Header;