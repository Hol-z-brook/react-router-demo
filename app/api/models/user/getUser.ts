import { type WithId, ObjectId } from "mongodb";
import { connectMongoClient } from "../../db/db.server";
import { collectionName } from "./user.const";
import type { User } from "./user.model";
import { serializeMongoId } from "~/api/db/serializeMongoId";

export async function getUser(id: string): Promise<User | null> {
  try {
    const db = await connectMongoClient();
    const user = await db.collection<WithId<User>>(collectionName).findOne({ _id: new ObjectId(id) });

    if (!user) return null;


    return serializeMongoId(user);
  } catch (error) {
    console.error("Error fetching user:", error);
    throw new Error("Failed to retrieve user.");
  }
}
