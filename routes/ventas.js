import express from "express";
const route = express.Router();
import ventaController from "../controllers/ventas.js"
route.post("/", ventaController.create);
route.get("/", ventaController.getAll);
route.get("/:id", ventaController.getOne);
route.put("/:id", ventaController.update);
route.delete("/:id", ventaController.delete);
export default route;