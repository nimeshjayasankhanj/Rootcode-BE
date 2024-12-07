import express from "express";
import PostController from "../controllers/PostController";
import { postValidation } from "../validations/post";

const postRoutes = express.Router();

const postController = new PostController();


postRoutes.get("/lists", postController.lists);
postRoutes.post("/create", postValidation(), postController.create);

export default postRoutes;
