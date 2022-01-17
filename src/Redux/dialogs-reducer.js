const ADD_MESSAGE = "ADD-MESSAGE";


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
    ]
}


const dialogsReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_MESSAGE:
            return {
                ...state,
                messages: [...state.messages, action.message]
            };
        default:
            return state;
    }
}

export const addMessage = (message) => ({type: ADD_MESSAGE, message})

export default dialogsReducer;