import {MongoClient} from "mongodb";
//npm i dotenv
import dotenv from "dotenv";
dotenv.config();
const connectionString = process.env.ATLAS_URI || "";

const client = new MongoClient(connectionString);

let conn;
try{
    conn = await client.connect();
    console.log('mongoDB is connected')

}catch(e){
    console.error(e);
}
 let db = client.db("APDS2024")

 export default db;