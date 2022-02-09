// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import axios from "axios";
import type { NextApiRequest, NextApiResponse } from "next";
import { dbConnect } from "../../../lib/dbConnect";
import userSchema from "../../../schemas/user.schema";

type Data = {
  name: string;
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  try {
    if (req.method === "POST") {
      await dbConnect();

      const newUser = await userSchema.create({
        userId: req.body.uid,
      });

      res.status(200).json(newUser);
    }
  } catch (error: any) {
    res.status(500).json({ name: "Error executing operation" });
  }
}
