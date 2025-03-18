import { MongoClient, Db } from "mongodb";

const MONGODB_URI = process.env.MONGODB_URI;

if (!MONGODB_URI) throw new Error("Missing MONGODB_URI in environment variables");

const mongoClient = new MongoClient(MONGODB_URI);

let db: Db | null = null;

export async function connectMongoClient(): Promise<Db> {
  if (!db) {
    await mongoClient.connect();
    db = mongoClient.db('RemixDemo');
  }
  
  return db;
}

