import "./App.css";
import Header from "./components/Header/Header";
import Navbar from "./components/Navbar/Navbar";
import Profile from "./components/Profile/Profile";
import {BrowserRouter, Routes, Route} from "react-router-dom";
import Settings from "./components/Settings/Settings";
import Music from "./components/Music/Music";
import News from "./components/News/News";
import DialogsContainer from "./components/Dialogs/DialogsContainer";


function App() {
    return (
        <BrowserRouter>
            <div className="App">
                <div className="container">
                    <Header/>
                    <Navbar/>
                    <div className="app-content-wrapper">
                        <Routes>
                            <Route path="/profile" element={<Profile/>}/>
                            <Route path="/dialogs" element={<DialogsContainer/>}/>
                            <Route path="/music" element={<Music/>}/>
                            <Route path="/news" element={<News/>}/>
                            <Route path="/settings" element={<Settings/>}/>
                        </Routes>
                    </div>
                </div>
            </div>
        </BrowserRouter>
    );
}

export default App;