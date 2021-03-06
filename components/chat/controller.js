const store = require("./store")

function addChat(users) {
    if (!users && !Array.isArray(users)) {
        return Promise.reject("Invalid user")
    }
    const chat = {
        users: users
    }

    return store.add(chat)
}

function getChats(userId) {
    return store.get(userId)
}


module.exports = {
    addChat,
    getChats
};