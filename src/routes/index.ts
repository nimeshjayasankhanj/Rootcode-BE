import { Router } from "express";
import postRoutes from "./posts";
import commentRoutes from "./comments";

const routes = Router();

routes.use("/post", postRoutes);
routes.use("/comment", commentRoutes);

export default routes;
