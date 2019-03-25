import { sendApi } from "../utils";

export const getChatRooms = (data) => {
    return {
        type: "CHATROOM_LIST_SUCCESS",
        data: data
    }
}
export const ActionFetchGETid = ()=>{
    return dispatch => {
        let fetchSetId = sendApi(null, "GET", "ChatRooms")
        .then(response => dispatch(getChatRooms(response)))
    }
}



export const chatRoomIdSetState = (data) => {
    return {
        type: "SetId",
        data: data
    }
}



export const GETmessageState = (id, message) => {
    return {
        type: "GETmessage",
        data: { message: message, id: id }
    }
}
export const ActionFetchGET = (id)=> {
    return dispatch => {
        let fetchGET = sendApi(null, "GET", `message/${id}`)
        .then(response => dispatch(GETmessageState(id,response)))
    }
}



export const POSTmessageState = (id, message) => {
    return {
        type: "POSTmessage",
        data: { message: message, id: id }
    }
}
export const ActionFetchPOST = (formValue) => {
    return dispatch => {
        let fetchPOST = sendApi(formValue, "POST", "message")
            .then(response => dispatch(POSTmessageState(response.roomId, response)))
    
    }
}

