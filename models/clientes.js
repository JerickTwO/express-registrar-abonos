import mongoose from 'mongoose'
import Cliente from '../schemas/clientes.js'
class clientesModel {

    async create(cliente) {
        return await Cliente.create(cliente)
    }
    async update(id, cliente) {
        return await Cliente.findOneAndUpdate({ _id: new mongoose.Types.ObjectId(id) }, cliente, { new: true });
    }
    async getAll() {
        return await Cliente.find();
    }
    async getOne(id) {
        return await Cliente.findById({ _id: new mongoose.Types.ObjectId(id) })
    }
    async delete(id) {
        return await Cliente.deleteOne({ _id: id })
    }
}

export default new clientesModel();
