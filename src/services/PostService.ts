import { PostPayload } from "../DTO/post";
import PostRepository from "../repository/PostRepository";

export default class PostService {

    protected postRepository: PostRepository = new PostRepository();

    public async lists() {
        try {
            const data = await this.postRepository.lists();
            return data;
        } catch (error) {
            throw error;
        }
    }

    public async create(data: PostPayload) {
        try {
            const payload = this.formatPayload(data);
            await this.postRepository.create(payload);
        } catch (error) {
            throw error;
        }
    }

    private formatPayload(data: PostPayload) {
        return {
            title: data.title,
            description: data.description,
            color: data.color,
        }
    }
}
