import express from "express";
import routes from "./routes/index";
import mongoose from "mongoose";
import cors from "cors";
require("dotenv/config");

const app = express();
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(routes);

mongoose
    .connect(<string>process.env.MONGOOSE_URL)
    .then((result) => {
        console.log("Connected to the DB");
    })
    .catch((err) => console.log(err));

app.listen(8000, () => {
    console.log("Application listen at 8000");
});
