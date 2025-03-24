import dbClient from "../config/dbClient.js";
import { ObjectId } from "mongodb";
class clientesModel {

    async create(cliente) {
        const colClientes = dbClient.db.collection('abonos');
        return await colClientes.insertOne(cliente);
    }
    async update(id, cliente) {
        const colClientes = dbClient.db.collection('abonos');
        return await colClientes.updateOne({ _id: new ObjectId(id) }, { $set: cliente })
    }
    async getAll() {
        const colClientes = dbClient.db.collection('abonos');
        return await colClientes.find({}).toArray();
    }
    async getOne(id) {

        const colClientes = dbClient.db.collection('abonos');
        return await colClientes.findOne({ _id: new ObjectId(id) });
    }
    async delete(id) {
        const colClientes = dbClient.db.collection('abonos')
        return await colClientes.deleteOne({ _id: new ObjectId(id) })
    }
}

export default new clientesModel();
