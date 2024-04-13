import express, { Express} from "express";
import postrouter from "./routes/postRoutes";
import cors from "cors";
import mongoose from "mongoose";
import dotenv from "dotenv";


dotenv.config(); 

const app: Express = express();
const port = process.env.PORT;
const MongoUrl : string= process.env.MONGODB_URI || "";
app.use(cors());
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use('/uploads',express.static("uploads"))
app.use('/backend',postrouter);
mongoose.connect(MongoUrl)
  .then(() => {
    app.listen(port, () => {
      console.log(`Server running at the port ${port}`);
 }
    )
  })
  .catch(err => console.error(err));
  