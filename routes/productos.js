import express from "express";
const route = express.Router();
import productosController from "../controllers/productos.js"
route.post("/", productosController.create);
route.get("/", productosController.getAll);
route.get("/:id", productosController.getOne);
route.put("/:id", productosController.update);
route.delete("/:id", productosController.delete);
export default route; 