import 'dotenv/config';
import mongoose from "mongoose";

class dbClient {
    constructor() {
        this.conectarDB();
    }
    async conectarDB() {
        const queryString = `mongodb+srv://${process.env.USER_DB}:${process.env.PASSWORD_DB}@${process.env.SERVER_DB}/abonos?retryWrites=true&w=majority`;
        // this.client = new MongoClient(queryString);
        await mongoose.connect(queryString);
    }
    async cerrarConexion() {
        try {
            await mongoose.disconnect();
            console.log("✅ DB CONECTADA")
        } catch (e) {
            console.error("❌ Erro al conectarse", e)
        }
    }

}

export default new dbClient();
