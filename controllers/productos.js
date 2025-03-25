import productosModel from "../models/productos.js"
class productosController {
    constructor() {

    }
    async create(req, res) {
        try {
            const productos = req.body;
            if (!productos || Object.keys(productos).length === 0) {
                return res.status(400).json({ error: "Datos inválidos o vacíos" });
            }

            const nuevoProductos = await productosModel.create(productos);
            res.status(201).json(nuevoProductos);
        } catch (error) {
            res.status(500).json({ error: "Error al insertar productos", detalle: error.message });
        }
    }
    async update(req, res) {
        try {
            const { id } = req.params
            const productos = await productosModel.update(id, req.body);

            res.status(200).json(productos);
        } catch (e) {
            res.status(500).send(e);
        }
    }
    async delete(req, res) {
        try {
            const { id } = req.params
            const productos = await productosModel.delete(id)
            res.status(206).json(productos);
        } catch (e) {
            res.status(500).send(e);
        }
    }
    async getAll(req, res) {
        try {
            const productos = await productosModel.getAll();
            res.status(200).json(productos);
        } catch (e) {
            res.status(500).send(e);
        }
    } async getOne(req, res) {
        try {
            const { id } = req.params;
            const productos = await productosModel.getOne(id);
            res.status(201).json(productos);
        } catch (e) {
            res.status(500).send(e);
        }
    }
}
export default new productosController