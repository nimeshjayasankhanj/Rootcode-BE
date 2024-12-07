import { body } from "express-validator";

export const postValidation = () => {
    return [
        body("title").notEmpty().withMessage("Title should be provided"),
        body("description")
            .notEmpty()
            .withMessage("Description should be provided"),
        body("color")
            .notEmpty()
            .withMessage("Color should be provided"),
    ];
};

