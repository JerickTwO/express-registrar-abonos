import clientesModel from "../models/clientes.js"
class clienteController {
    constructor() {

    }
    async create(req, res) {
        try {
            const cliente = req.body;
            if (!cliente || Object.keys(cliente).length === 0) {
                return res.status(400).json({ error: "Datos inválidos o vacíos" });
            }

            res.status(201).json(cliente);
        } catch (error) {
            res.status(500).json({ error: "Error al insertar cliente", detalle: error.message });
        }
    }
    async update(req, res) {
        try {
            const { id } = req.params
            const cliente = await clientesModel.update(id, req.body);

            res.status(200).json(cliente);
        } catch (e) {
            res.status(500).send(e);
        }
    }
    async delete(req, res) {
        try {
            const { id } = req.params
            const cliente = await clientesModel.delete(id)
            res.status(206).json(cliente);
        } catch (e) {
            res.status(500).send(e);
        }
    }
    async getAll(req, res) {
        try {
            const clientes = await clientesModel.getAll();
            res.status(200).json(clientes);
        } catch (e) {
            res.status(500).send(e);
        }
    } async getOne(req, res) {
        try {
            const { id } = req.params;
            const cliente = await clientesModel.getOne(id);
            res.status(201).json(cliente);
        } catch (e) {
            res.status(500).send(e);
        }
    }
}
export default new clienteController