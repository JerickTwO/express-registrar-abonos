import mongoose from "mongoose";

const { Schema } = mongoose;

const productosSchema = new Schema(
    {
        nombre: {
            type: String,
            required: true,
        },
        precio: {
            type: Number,
            min: [0, "El precio debe ser mayor moon"],
            required: true,
        }
    },
    { timestamps: true, versionKey: false }
);

export default mongoose.model('productos', productosSchema);
