import {Router} from "express";
import {Addposts, Add_adminname, Deleteposts, Add_profile, Showposts,Show_adminname} from "../controllers/postController"
import multer from 'multer';

const router = Router();

router.get("/posts/:id",Showposts);

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, "/uploads")
    },
    filename: function (req, file, cb) {
        const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9)
        cb(null,  uniqueSuffix + file.originalname)
    }
})
const upload = multer({ storage: storage });
router.post("/posts",upload.single("image"),Addposts);
router.delete("/posts",Deleteposts);
router.post("/admin",Add_adminname);
router.get("/admin",Show_adminname);
router.post("/adminprofile",Add_profile);

export default router;