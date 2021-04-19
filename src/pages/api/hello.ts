// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { Db, MongoClient } from "mongodb";
import type { NextApiRequest, NextApiResponse } from "next";
import { connectToDatabase } from "../../util/mongodb";

export default async (_: NextApiRequest, res: NextApiResponse) => {
  const conn: { client: MongoClient; db: Db } = await connectToDatabase();
  const { client } = conn;

  const isConnected = client.isConnected();
  res.status(200).json({ name: "John Doe", isConnected });
};
