import mongoose, { Schema } from "mongoose";
import mongooseAggregatePaginate from "mongoose-aggregate-paginate-v2";

// Define the schema for videos
const videoSchema = new Schema({
    videoFile: {
        type: String, // Cloudinary URL for the video file
        required: [true, "Video URL is required"]
    },
    thumbnail: {
        type: String,
        required: [true, "Thumbnail URL is required"]
    },
    title: {
        type: String,
        required: [true, "Title is required"]
    },
    description: {
        type: String,
        required: [true, "Description is required"]
    },
    duration: {
        type: Number,  // Duration of the video in seconds
        required: true
    },
    views: {
        type: Number,
        default: 0
    },
    isPublished: {
        type: Boolean,
        default: true
    },
    owner: {
        type: Schema.Types.ObjectId,
        ref: "User" // Reference to the owner user
    }
}, { timestamps: true }); // Automatically adds createdAt and updatedAt timestamps

// Plugin for pagination support
videoSchema.plugin(mongooseAggregatePaginate);

// Define the Video model
export const Video = mongoose.model("Video", videoSchema);
