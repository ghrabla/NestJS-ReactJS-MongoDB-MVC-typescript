import * as mongoose from 'mongoose'

export const ArticleSchema = new mongoose.Schema({
    title: String,
    description: String,
    articleNum: Number,
    status: Boolean,
})