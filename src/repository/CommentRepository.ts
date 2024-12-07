import mongoose from "mongoose";
import { CommentPayload } from "../DTO/post";
import { Comments } from "../models/Comments";
import { Post } from "../models/Post";


export default class CommentRepository {

    public async create(data: CommentPayload) {
        try {
            await Comments.create(data);
        } catch (error) {
            throw error;
        }
    }

    public async lists(id: string) {
        try {

            const postWithComments = await Post.aggregate([
                { $match: { _id: new mongoose.Types.ObjectId(id) } },
                {
                    $lookup: {
                        from: 'comments', // The name of the comments collection
                        localField: '_id',
                        foreignField: 'post_id',
                        as: 'comments',
                    },
                },
                { $project: { __v: 0, created_at: 0, updated_at: 0 } },
            ]);

            return postWithComments
        } catch (error) {
            throw error;
        }
    }
}
