const express = require("express");
const app = express();
const server = require("http").Server(app)

const bodyParser = require("body-parser")
const socket = require("./socket")
const db = require("./db")
const router = require("./network/routes")


const dbConfig = {
    url: 'mongodb://localhost:27017/chatdb',
    user: 'aamv',
    password: 'aamv'
}

db(dbConfig);

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: false}))

socket.connect(server);

router(app)

app.use("/app", express.static("public"))

server.listen(3000, function (){
    console.log("App listen on http://localhost:3000");
});