const express = require("express");
const bodyParser = require("body-parser")
const db = require("./db")
const router = require("./network/routes")


const dbConfig = {
    url: 'mongodb://localhost:27017/chatdb',
    user: 'aamv',
    password: 'aamv'
}

db(dbConfig);

const app = express();

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: false}))
// app.use(router);

router(app)


app.use("/app", express.static("public"))

app.listen(3000);
console.log("App listen on http://localhost:3000");