import { MongoClient } from "mongodb";
import 'dotenv/config';

class DBClient {
    constructor() {
        const queryString = `mongodb+srv://${process.env.USER_DB}:${process.env.PASSWORD_DB}@${process.env.SERVER_DB}/?retryWrites=true&w=majority`;
        this.client = new MongoClient(queryString);
        this.db = null;
    }

    async conectarDB() {
        try {
            await this.client.connect();
            this.db = this.client.db("clientes");
            console.log("✅ Conectado a la DB");
        } catch (e) {
            console.error("❌ Error al conectar a la DB:", e);
        }
    }
}

const dbClient = new DBClient();
dbClient.conectarDB();

export default dbClient;
