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


function App() {
    return (
        <Router>
            <div className="App">
                <div className="container">
                    <HeaderContainer/>
                    <Navbar/>
                    <div className="app-content-wrapper">
                        <Switch>
                            <Route path="/profile/:userId?"><Profile/></Route>
                            <Route path="/dialogs"><DialogsContainer/></Route>
                            <Route path="/music"><Music/></Route>
                            <Route path="/news"><News/></Route>
                            <Route path="/users"><UsersContainer/></Route>
                            <Route path="/settings"><Settings/></Route>
                        </Switch>
                    </div>
                </div>
            </div>
        </Router>
    );
}

export default App;
