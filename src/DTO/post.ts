export interface PostPayload {
    title: string;
    description: string;
    color: string;
}

export interface CommentPayload {
    post_id: string;
    comment: string;
}