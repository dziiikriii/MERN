import mongoose from "mongoose"

const menuSchema = mongoose.Schema(
    {
        title: {
            type: String,
            requried: true,
        }, price: {
            type: Number,
            required: true,
        }

    },
    {
        timestamps:true,
    }
)

export const Menu = mongoose.model('Menu', menuSchema)