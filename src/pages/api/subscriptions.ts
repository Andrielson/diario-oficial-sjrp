import type { NextApiRequest, NextApiResponse } from "next";
import { connectToDatabase } from "../../util/db";

interface Sub {
  email: string;
  createdAt: Date;
  confirmed: boolean;
}

export default async (req: NextApiRequest, res: NextApiResponse) => {
  if (!!!req.method || req.method.toUpperCase() !== "POST") {
    res.writeHead(405, { Allow: "POST" });
    res.end();
    return;
  }
  const { email } = req.body;
  const { db } = await connectToDatabase();
  const collection = db.collection<Sub>("subscriptions");
  const count = await collection.countDocuments({ email });
  if (count > 0) {
    res.status(409).json({ error: "E-mail já está cadastrado!" });
    return;
  }
  const { insertedCount } = await collection.insertOne({
    email,
    createdAt: new Date(),
    confirmed: false,
  });
  if (insertedCount === 1) res.status(201).end();
  else res.status(500).json({ error: "Falha ao cadastrar o e-mail!" });
};
