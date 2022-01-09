import {combineReducers, createStore} from "redux";
import profileReducer from "./profile-reducer";
import dialogsReducer from "./dialogs-reducer";
import sidebarReducer from "./sidebar-reducer";


let initState = {
    dialogsPage: {
        dialogs: [
            {id: 1, name: "Tigran"},
            {id: 2, name: "Andrey"},
            {id: 3, name: "Asmik"},
            {id: 4, name: "Elena"},
            {id: 5, name: "Vladimir"}
        ],

            messages: [
            {id: 1, message: "Hi"},
            {id: 2, message: "What's up, boy"},
            {id: 3, message: "Yo"}
        ],
            newMessageText: ""
    },
    profilePage: {
        posts: [
            {id: 1, message: "This is my second post!"},
            {id: 2, message: "This is my first post!"}
        ],
            newPostText: ""
    },
    sidebar: {
        friends: [
            {id: 1, name: "Elena"},
            {id: 2, name: "Tigran"},
            {id: 3, name: "Andrey"}

        ]
    }
}

let reducers = combineReducers(
    {
        profilePage: profileReducer,
        dialogsPage: dialogsReducer,
        sidebar: sidebarReducer
    }
)

let store = createStore(reducers, initState);

export default store;