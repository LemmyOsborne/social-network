import profileReducer from "./profile-reducer";
import dialogsReducer from "./dialogs-reducer";
import sidebarReducer from "./sidebar-reducer";


let store = {
    _callSubscriber() {
        console.log("Tree changed");
    },
    get getState() {
        return this._state;
    },
    subscribe(observer) {
        this._callSubscriber = observer;
    },
    _state: {
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
            newMessageText: "Fuck you dude"
        },
        profilePage: {
            posts: [
                {id: 1, message: "This is my second post!"},
                {id: 2, message: "This is my first post!"}
            ],
            newPostText: "it-kamasutra"
        },
        sidebar: {
            friends: [
                {id: 1, name: "Elena"},
                {id: 2, name: "Tigran"},
                {id: 3, name: "Andrey"}

            ]
        }
    },
    dispatch(action) {
        profileReducer(this._state.profilePage, action);
        dialogsReducer(this._state.dialogsPage, action);
        sidebarReducer(this._state.sidebar, action);
        this._callSubscriber();
    }
}


export default store;
