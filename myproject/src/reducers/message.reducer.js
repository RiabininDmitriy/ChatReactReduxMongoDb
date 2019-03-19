const initialMessageState = {
    message: { 1: [], 2: [], 3: [] }
}

export const messageReducer = function (state = initialMessageState, action) {
    switch (action.type) {
        case 'GETmessage': {
            const ActionData = action.data.id
            state.message[ActionData] = action.data.message
            const newState = Object.assign({}, { ...state })
            return newState
        } case 'POSTmessage': {
            const ActionData = action.data.id
            const newState = Object.assign({}, state)
            newState.message[ActionData] = newState.message[ActionData].concat([action.data.message])
            return newState
        }
    }
    return state
}