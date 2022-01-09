import s from "./Header.module.css"

function Header() {
    return(
        <header className={s.header}>
        <img src="https://1757140519.rsc.cdn77.org/static/v3/img/products/logo.png" alt="logo"/>
    </header>
    );
}

export default Header;