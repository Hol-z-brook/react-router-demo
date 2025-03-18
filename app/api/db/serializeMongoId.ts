import type { ObjectId } from "mongodb";

export function serializeMongoId<T extends { _id: ObjectId; }>(doc: T): T & { id: string; } {
  return { ...doc, id: doc._id.toHexString() };
}
