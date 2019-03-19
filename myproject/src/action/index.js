export const getChatRooms = (data) => {
    return {
        type: "CHATROOM_LIST_SUCCESS",
        data: data
    }
}

export const chatRoomIdSetState = (data) => {
    return {
        type: "SetId",
        data: data
    }
}






export const GETmessageState = (id,message)=> {
    return {
        type: "GETmessage",
        data:{message:message,id:id}
    }
}

export const POSTmessageState = (id,message)=> {
    return {
        type: "POSTmessage",
        data:{message:message,id:id}
    }
}
