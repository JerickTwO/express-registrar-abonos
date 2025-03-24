import express from "express";
const route = express.Router();
import clienteController from "../controllers/clientes.js"
route.post("/", clienteController.create);
route.get("/", clienteController.getAll);
route.get("/:id", clienteController.getOne);
route.put("/:id", clienteController.update);
route.delete("/:id", clienteController.delete);
export default route;