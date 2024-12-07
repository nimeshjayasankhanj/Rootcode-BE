import { NextFunction, Request, Response } from "express";
import { formatResponse } from "../utils/response";
import PostService from "../services/PostService";

export default class PostController {
    private postService: PostService = new PostService();
    constructor() {
        this.lists = this.lists.bind(this);
        this.create = this.create.bind(this);
    }

    public async lists(
        req: Request,
        res: Response,
    ) {
        try {
            const data = await this.postService.lists();
            res.json(formatResponse(200, "Post lists", data));
        } catch (error) {
            res.json(error);
        }
    }

    public async create(req: Request, res: Response) {
        try {
            await this.postService.create(req.body);
            res.json(formatResponse(200, "Post created", []));
        } catch (error) {
            res.json(error);

        }
    }



}
