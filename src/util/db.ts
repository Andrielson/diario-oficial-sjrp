import { Db, MongoClient } from "mongodb";
import { connectToDatabase as connectToMongo } from "./mongodb";

export interface Connection {
    client: MongoClient,
    db: Db,
}

export function connectToDatabase(): Promise<Connection> {
    return connectToMongo();
}