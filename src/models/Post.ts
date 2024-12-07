import mongoose, { Schema, Document, mongo } from "mongoose";

interface PostDocument extends Document {
    title: string;
    description: string;
    color: string;
}

const PostSchema = new Schema(
    {
        title: {
            type: String,
            require: true,
        },
        description: {
            type: String,
            require: true,
        },
        color: {
            type: String,
            require: true,
        }
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

PostSchema.virtual("comments", {
    ref: "comments", // The model to populate
    localField: "_id", // The field from the Post document
    foreignField: "post_id", // The field in the Comment model that references Post
    justOne: false, // Ensure we get all related comments (if there are multiple)
});

const Post = mongoose.model<PostDocument>("post", PostSchema);

export { Post };
