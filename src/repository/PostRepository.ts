import { PostPayload } from "../DTO/post";
import { Post } from "../models/Post";


export default class PostRepository {
    public async lists() {
        try {
            const data = await Post.aggregate([
                {
                    $lookup: {
                        from: 'comments',
                        localField: '_id',
                        foreignField: 'post_id',
                        as: 'comments',
                    }
                },
                {
                    $project: {
                        _id: 1,
                        title: 1,
                        description: 1,
                        color: 1,
                        comment_count: { $size: '$comments' }
                    }
                },
                {
                    $sort: { createdAt: -1 }
                }
            ])
                .then((results) => {
                    return results;
                })
                .catch((err) => {
                    return err;
                });
            return data;
        } catch (error) {
            throw error;
        }
    }

    public async create(data: PostPayload) {
        try {
            await Post.create(data);
        } catch (error) {
            throw error;
        }
    }

}
