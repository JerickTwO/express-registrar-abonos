import ventasModel from "./ventas.js"
class ventasController {
    constructor() {

    }
    async create(req, res) {
        try {
            const ventas = req.body;
            if (!ventas || Object.keys(ventas).length === 0) {
                return res.status(400).json({ error: "Datos inválidos o vacíos" });
            }

            const nuevoVentas = await ventasModel.create(ventas);
            res.status(201).json(nuevoVentas);
        } catch (error) {
            res.status(500).json({ error: "Error al insertar ventas", detalle: error.message });
        }
    }
    async update(req, res) {
        try {
            const { id } = req.params
            const ventas = await ventasModel.update(id, req.body);

            res.status(200).json(ventas);
        } catch (e) {
            res.status(500).send(e);
        }
    }
    async delete(req, res) {
        try {
            const { id } = req.params
            const ventas = await ventasModel.delete(id)
            res.status(206).json(ventas);
        } catch (e) {
            res.status(500).send(e);
        }
    }
    async getAll(req, res) {
        try {
            const ventas = await ventasModel.getAll();
            res.status(200).json(ventas);
        } catch (e) {
            res.status(500).send(e);
        }
    } async getOne(req, res) {
        try {
            const { id } = req.params;
            const ventas = await ventasModel.getOne(id);
            res.status(201).json(ventas);
        } catch (e) {
            res.status(500).send(e);
        }
    }
}
export default new ventasController