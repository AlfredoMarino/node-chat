const express = require("express");
const response = require("../../network/response");
const controller = require("./controller")

const router = express.Router();

router.post("/", (req, res) => {
    controller.addChat(req.body.users)
        .then((data) => {
            response.success(req, res, data, 201)
        })
        .catch((e) => {
            response.error(req, res, "Informacion invalida", 400, e)
        });
});

router.get("/:userId", (req, res) => {
    controller.getChats(req.params.userId)
        .then((data) => {
            response.success(req, res, data, 200)
        })
        .catch((e) => {
            response.error(req, res, "Informacion invalida", 400, e)
        });
})

module.exports = router;