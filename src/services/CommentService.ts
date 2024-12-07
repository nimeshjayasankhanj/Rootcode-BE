import { CommentPayload } from "../DTO/post";
import CommentRepository from "../repository/CommentRepository";

export default class CommentService {

    protected commentRepository: CommentRepository = new CommentRepository();

    public async create(data: CommentPayload) {
        try {
            const payload = this.formatPayload(data);
            await this.commentRepository.create(payload);
        } catch (error) {
            throw error;
        }
    }

    private formatPayload(data: CommentPayload) {
        return {
            post_id: data.post_id,
            comment: data.comment
        }
    }

    public async lists(id: string) {
        try {
            const data = await this.commentRepository.lists(id);
            const commentLists = this.formatCommentLists(data);
            return commentLists;
        } catch (error) {
            throw error;
        }
    }

    private formatCommentLists(commentLists: any) {
        return commentLists;
    }
}
