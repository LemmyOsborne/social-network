import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import Profile from "./components/Profile/Profile";
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";
import Settings from "./components/Settings/Settings";
import Music from "./components/Music/Music";
import News from "./components/News/News";
import DialogsContainer from "./components/Dialogs/DialogsContainer";
import UsersContainer from "./components/Users/UsersContainer";
import HeaderContainer from "./components/Header/HeaderContainer";
import Login from "./components/Login/Login";
import {Component} from "react";
import {connect} from "react-redux";
import {initializeApp} from "./Redux/appReducer";
import Preloader from "./components/common/Preloader";


class App extends Component {
    componentDidMount() {
        this.props.initializeApp()
    }

    render() {
        if (!this.props.initialized) {
            return <Preloader/>
        }

        return (
            <Router>
                <div className="App">
                    <div className="container">
                        <HeaderContainer/>
                        <Navbar/>
                        <div className="app-content-wrapper">
                            <Switch>
                                <Route path="/profile/:userId?">
                                    <Profile/>
                                </Route>
                                <Route path="/dialogs">
                                    <DialogsContainer/>
                                </Route>
                                <Route path="/music">
                                    <Music/>
                                </Route>
                                <Route path="/news">
                                    <News/>
                                </Route>
                                <Route path="/users">
                                    <UsersContainer/>
                                </Route>
                                <Route path="/settings">
                                    <Settings/>
                                </Route>
                                <Route path="/login">
                                    <Login/>
                                </Route>
                            </Switch>
                        </div>
                    </div>
                </div>
            </Router>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        initialized: state.app.initialized
    }
}

export default connect(mapStateToProps, {initializeApp})(App)
