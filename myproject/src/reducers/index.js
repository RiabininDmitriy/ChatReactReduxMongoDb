import {combineReducers} from 'redux'
import {chatRoomReducer} from './chatRooms.reducer'
import {messageReducer} from './message.reducer'

const reducers = combineReducers({ //создаем функцию-обертку, которая запустит последовательно counterReducer и booleanReducer передав им ветви c и b хранилища и обновив эти же ветви в случае нового состояния.
    chatRoomState : chatRoomReducer,
    messageState : messageReducer
})



export default reducers