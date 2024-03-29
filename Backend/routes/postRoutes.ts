import {Router} from "express";
import {Addposts, Add_adminname, Deleteposts, Add_profile, Showposts,Show_adminname} from "../controllers/postController"


const router = Router();

router.get("/posts",Showposts);
router.post("/posts",Addposts);
router.delete("/posts",Deleteposts);
router.post("/admin",Add_adminname);
router.get("/admin",Show_adminname);
router.post("/adminprofile",Add_profile);