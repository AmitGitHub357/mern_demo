    const express = require("express");
    const router = express.Router();
    const { authenticate } = require('../middleware/authenticate')
    const { getUser, signUpUser, signInUser, getUserById , deleteUser ,updateUser} = require('../controller/userController')
    //api/user/
    router.get("/", getUser)
    router.get("/:id", getUserById)
    //api/user/
    router.post("/signUp",signUpUser)
    router.post("/signIn",signInUser)
    //api/user/id
    router.delete("/:id", deleteUser)
    //api/goals/id
    router.put("/:id", updateUser)

            
 module.exports = router
