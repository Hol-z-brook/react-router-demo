import type { WithId } from "mongodb";
import { connectMongoClient } from "../../db/db.server";
import { serializeMongoId } from "../../db/serializeMongoId";
import { collectionName } from "./user.const";
import type { User } from "./user.model";

export async function getUsers(): Promise<User[]> {
  const db = await connectMongoClient();
  const users = await db.collection<WithId<User>>(collectionName).find({}).toArray();
  return users.map(serializeMongoId);
}
