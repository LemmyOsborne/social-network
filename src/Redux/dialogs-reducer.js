const ADD_MESSAGE = "ADD-MESSAGE";
const UPDATE_MESSAGE_TEXT = "UPDATE-MESSAGE-TEXT";

export const addMessageActionCreator = () => ({type: ADD_MESSAGE})
export const updateMessageTextActionCreator = (message) => ({type: UPDATE_MESSAGE_TEXT, newText: message})

let initialState = {
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
}


const dialogsReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_MESSAGE:
            let newMessage = {
                id: 4,
                message: state.newMessageText
            };
            return {
                ...state,
                messages: [...state.messages, newMessage],
                newMessageText: ""
            };
        case UPDATE_MESSAGE_TEXT:
            return {
                ...state,
                newMessageText: action.newText
            };
        default:
            return state;
    }
}

export default dialogsReducer;