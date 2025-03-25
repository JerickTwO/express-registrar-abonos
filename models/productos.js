import mongoose from 'mongoose'
import Productos from '../schemas/productos.js'
class productosModel {

    async create(producto) {
        return await Productos.create(producto)
    }
    async update(id, producto) {
        return await Productos.findOneAndUpdate({ _id: new mongoose.Types.ObjectId(id) }, producto, { new: true });
    }
    async getAll() {
        return await Productos.find();
    }
    async getOne(id) {
        return await Productos.findById({ _id: new mongoose.Types.ObjectId(id) })
    }
    async delete(id) {
        return await Productos.deleteOne({ _id: id })
    }
}

export default new productosModel();
