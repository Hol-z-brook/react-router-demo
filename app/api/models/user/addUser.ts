import { connectMongoClient } from "../../db/db.server";
import { collectionName } from "./user.const";
import { type User, UserSchema } from "./user.model";

export async function addUser(user: User): Promise<string> {
  const validatedUser = UserSchema.parse(user);

  const db = await connectMongoClient();
  const result = await db.collection<User>(collectionName).insertOne(validatedUser);

  return result.insertedId.toString();
}
