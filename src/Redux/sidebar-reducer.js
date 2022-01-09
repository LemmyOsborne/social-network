let initialState = {
    sidebar: {
        friends: [
            {id: 1, name: "Elena"},
            {id: 2, name: "Tigran"},
            {id: 3, name: "Andrey"}

        ]
    }
}


const sidebarReducer = (state=initialState, action) => state

export default sidebarReducer;