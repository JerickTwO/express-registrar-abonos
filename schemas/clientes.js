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
        },
        correo: {
            type: String,  // 🔥 CORRECCIÓN AQUÍ
            required: true  // 🔥 CORRECCIÓN AQUÍ
        }
    },
    { timestamps: true }
);

export default mongoose.model('abonos', clienteSchema); // 🔥 Opcional: Cambia 'abonos' por 'Cliente' si almacenas clientes.
