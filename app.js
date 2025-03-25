import express from 'express';
import routesClientes from './routes/clientes.js'
import routesProductos from './routes/productos.js'
import 'dotenv/config';
import dbClient from './config/dbClient.js';

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
    
app.use("/clientes", routesClientes);
app.use("/productos", routesProductos);


try {
    console.log("HOLA", process.env.PORT)
    const PORT = process.env.PORT || 3000;
    console.log(PORT)
    app.listen(PORT, () => {
        console.log('Servidor escuchando en el puerto ', PORT);
    });

}
catch (e) {
    console.log(e)
}
process.on('SIGINT', async()=>{
    dbClient.cerrarConexion();
    process.exit(0)
})

