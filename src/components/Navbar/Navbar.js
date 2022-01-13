import s from "./Navbar.module.css";
import {NavLink, useLocation} from "react-router-dom";

function Navbar(props) {
    let location = useLocation()
    return (
        <nav className={s.navbar}>
            <div>
                {location.pathname === "/profile" ? <NavLink to="/profile" className={s.active}>Profile</NavLink> :
                    <NavLink to="/profile" className={s.item}>Profile</NavLink>}
            </div>
            <div>
                {location.pathname === "/dialogs" ? <NavLink to="/dialogs" className={s.active}>Messages</NavLink> :
                    <NavLink to="/dialogs" className={s.item}>Messages</NavLink>}
            </div>
            <div>
                {location.pathname === "/news" ? <NavLink to="/news" className={s.active}>News</NavLink> :
                    <NavLink to="/news" className={s.item}>News</NavLink>}
            </div>
            <div>
                {location.pathname === "/music" ? <NavLink to="/music" className={s.active}>Music</NavLink> :
                    <NavLink to="/music" className={s.item}>Music</NavLink>}
            </div>
            <div>
                {location.pathname === "/users" ? <NavLink to="/users" className={s.active}>Users</NavLink> :
                    <NavLink to="/users" className={s.item}>Users</NavLink>}
            </div>
            <div>
                {location.pathname === "/settings" ? <NavLink to="/settings" className={s.active}>Settings</NavLink> :
                    <NavLink to="/settings" className={s.item}>Settings</NavLink>}
            </div>
        </nav>
    );
}

export default Navbar;