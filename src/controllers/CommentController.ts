import { Request, Response } from "express";
import { formatResponse } from "../utils/response";
import CommentService from "../services/CommentService";

export default class CommentController {
    private commentService: CommentService = new CommentService();
    constructor() {
        this.create = this.create.bind(this);
        this.lists = this.lists.bind(this);
    }

    public async create(req: Request, res: Response) {
        try {
            await this.commentService.create(req.body);
            res.json(formatResponse(200, "Post created", []));
        } catch (error) {
            res.json(error);

        }
    }


    public async lists(
        req: Request,
        res: Response,
    ) {
        try {
            const { id } = req.params;
            const data = await this.commentService.lists(id);
            res.json(formatResponse(200, "Post lists", data));
        } catch (error) {
            console.log(error)
            res.json(error);

        }
    }
}