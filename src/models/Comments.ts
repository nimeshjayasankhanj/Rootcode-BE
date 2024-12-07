import mongoose, { Schema, Document } from "mongoose";

interface CommentDocument extends Document {
    comment: string;
}

const CommentSchema = new Schema(
    {
        comment: {
            type: String,
            require: true,
        },
        post_id: { type: mongoose.Schema.Types.ObjectId, ref: "post" },
    },
    {
        toJSON: {
            transform(doc, ret) {
                delete ret.__v;
                delete ret.created_at;
                delete ret.updated_at;
            },
        },
        timestamps: true,
    }
);

const Comments = mongoose.model<CommentDocument>("comments", CommentSchema);

export { Comments };
