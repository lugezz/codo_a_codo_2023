import { db } from "../database/db.js";
import { DataTypes } from "sequelize";

export const PostModel = db.define("posts",{
    "title": {"type": DataTypes.STRING},
    "content": {"type": DataTypes.STRING}
});