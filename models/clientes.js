import Cliente from '../schemas/clientes.js'
class clientesModel {

    async create(cliente) {
        return await Cliente.create(cliente)
    }
    async update(id, cliente) {
        return await Cliente.findOneAndUpdate(id, cliente, { new: true });
    }
    async getAll() {
        return await Cliente.find();
    }
    async getOne(id) {
        return await Cliente.findById(id)
    }
    async delete(id) {
        return await Cliente.deleteOne(id)
    }
}

export default new clientesModel();
