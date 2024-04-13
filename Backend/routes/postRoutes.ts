import { Router } from "express";
import {
  Addposts,
  Deleteposts,
  Showposts,
  Add_admin,
  Show_Admin,
  All_posts,
  Foundt,
  Add_name
} from "../controllers/postController";
import multer from "multer";

const router = Router();

router.get("/posts/:id", Showposts);

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "uploads/");
  },
  filename: function (req, file, cb) {
    const uniqueSuffix = Date.now() + "-" + Math.round(Math.random() * 1e9);
    cb(null, uniqueSuffix + file.originalname);
  },
});
const upload = multer({ storage: storage });
router.post("/posts", upload.single("image"), Addposts);
router.post("/admin/:id", upload.single("admin_image"), Add_admin);
router.get("/admin/:id", Show_Admin);
router.get("/", All_posts);
router.get("/token1/:id",Foundt);
router.post("/user/:id",Add_name);
router.post("/delete/:id",Deleteposts);
router.put("/edit/:id")

export default router;
