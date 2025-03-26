import mongoose from "mongoose";

const { Schema } = mongoose;

const clienteSchema = new Schema(
    {
        nombre: { type: String, required: true },
        correo: { type: String, unique: true },
        deudaTotal: { type: Number, required: true, default: 0 },    
    },
    { timestamps: true, versionKey: false }
);

export default mongoose.model('clientes', clienteSchema);
