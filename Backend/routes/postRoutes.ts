import { Router } from "express";
import {
  Addposts,
  Deleteposts,
  Showposts,
  Add_admin,
  Show_Admin,
  All_posts,
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
router.delete("/posts", Deleteposts);
router.get("/admin/:id", Show_Admin);
router.get("/", All_posts);

export default router;
