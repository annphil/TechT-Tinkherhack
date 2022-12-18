const router = require("express").Router();
const {token } = require("../backend/server.js");
const {route} = require("./dm.router");
const {words} = require("./app.js");
// router.post("/signup",Signup);
// router.post("/login", Login);
// router.post("/order",Order);
// router.put("/paymentstat",Paymentstat)
// router.get("/menu",DisplayMenu)
module.exports = router;