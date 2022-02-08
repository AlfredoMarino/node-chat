const Model = require("./model")

function addMessage(message) {
    const myMessage = new Model(message);
    myMessage.save()
}

function getMessages(filter) {
    return new Promise(((resolve, reject) => {
        let filterMessage = {};
        if (filter) {
            if (filter.user){
                filterMessage.user = filter.user;
            }
            if (filter.chat) {
                filterMessage.chat = filter.chat;
            }
        }
        Model.find(filterMessage)
            .populate('user')
            .exec((err, populated) => {
                if (err) {
                    reject(err);
                    return false;
                }
                resolve(populated)
            })
    }))
}

async function updateText(id, text) {
    const foundMessage = await Model.findById(id)
    foundMessage.message = text;
    return await foundMessage.save()
}

function removeMessage(id) {
    return Model.deleteOne({
        _id: id
    })
}

module.exports = {
    add: addMessage,
    list: getMessages,
    update: updateText,
    remove: removeMessage
}