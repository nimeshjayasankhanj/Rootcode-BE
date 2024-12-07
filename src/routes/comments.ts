import express from "express";
import { commentValidation } from "../validations/comment";
import CommentController from "../controllers/CommentController";

const commentRoutes = express.Router();

const commentController = new CommentController();

commentRoutes.post("/create", commentValidation(), commentController.create);

commentRoutes.get("/lists/:id", commentController.lists);

export default commentRoutes;
