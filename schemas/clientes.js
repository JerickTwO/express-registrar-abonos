import mongoose from "mongoose";

const { Schema } = mongoose;

const clienteSchema = new Schema(
    {
        nombre: {
            type: String,
            required: true,
        },
        apellido: {
            type: String,
        },
        edad: {
            type: Number,
            min: [1, "Apenas puedes hablar, crece un poco anda"],
            max: [100, "Un poco más y ya no"]
        },
        correo: {
            type: String,
            required: true
        }
    },
    { timestamps: true, versionKey: false }
);

export default mongoose.model('clientes', clienteSchema);
