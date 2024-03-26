import {Router} from "express"
import { registerUser } from "../contollers/user.contoller.js";
import {upload} from "../middlerwares/multer.middlerwares.js"

const router = Router();

router.route("/register").post(
    // upload.fields is used as middle wavers
    upload.fields([
        {
            name : "avatar",
            maxCount : 1
        }, {
            name : "coverImage", 
            maxCount : 2
        }
    ])  ,  
    registerUser
)



export default router ;