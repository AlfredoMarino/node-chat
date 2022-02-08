const db = require("mongoose")

db.Promise = global.Promise;

async function connect(dbConfig) {
    const options = {
        useNewUrlParser: true,
        user: dbConfig.user,
        pass: dbConfig.password
    }
    await db.connect(dbConfig.url, options);
}

module.exports = connect;