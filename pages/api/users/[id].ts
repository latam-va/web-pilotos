// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
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
   await dbConnect();
    const { id } = req.query;
    const results = await userSchema.findOne({
      userId: id,
    });

    if (!results) {
      res.status(404)
    }

    res.status(200).json(results);
  } catch (error: any) {
    res.status(500).json({ name: "Error executing operation" });
  }
}
