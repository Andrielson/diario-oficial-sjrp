// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";
import { connectToDatabase } from "../../util/db";

export default async (_: NextApiRequest, res: NextApiResponse) => {
  const { client } = await connectToDatabase();

  const isConnected = client.isConnected();
  res.status(200).json({ name: "John Doe", isConnected });
};
