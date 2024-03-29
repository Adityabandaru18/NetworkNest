import express, {Request,Response, Express} from "express";
import path from "path";
// import cors from "cors";
// import mongoose from "mongoose";
// import session from "express-session";
// import axios from "axios";
// import dotenv from "dotenv";
// import jwt from "jsonwebtoken";
// import passport from "passport";

// dotenv.config();

const app: Express = express();
const port = process.env.PORT || 5000;

// app.use(cors());
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

// mongoose.connect(process.env.MONGODB_URI!, { useNewUrlParser: true, useUnifiedTopology: true })
//   .then(() => console.log("MongoDB connected"))
//   .catch(err => console.error(err));

app.get("/", (req: Request, res: Response) => {
  
});
console.log(__filename);
app.listen(port, () => {
  console.log(`Server running at the port ${port}`);
});
