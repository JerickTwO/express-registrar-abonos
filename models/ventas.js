import mongoose from 'mongoose'
import Ventas from '../schemas/ventas.js'
class VentasModel {

    async create(venta) {
        return await Ventas.create(venta)
    }
    async update(id, venta) {
        return await Ventas.findOneAndUpdate({ _id: new mongoose.Types.ObjectId(id) }, venta, { new: true });
    }
    async getAll() {
        return await Ventas.find();
    }
    async getOne(id) {
        return await Ventas.findById({ _id: new mongoose.Types.ObjectId(id) })
    }
    async delete(id) {
        return await Ventas.deleteOne({ _id: id })
    }
}

export default new VentasModel();
