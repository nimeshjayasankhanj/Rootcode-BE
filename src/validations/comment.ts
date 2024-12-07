import { body } from "express-validator";

export const commentValidation = () => {
    return [
        body("post_id").notEmpty().withMessage("Post ID should be provided"),
        body("comment")
            .notEmpty()
            .withMessage("Comment should be provided"),
    ];
};
