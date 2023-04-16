import connectDb from "@/app/lib/db";
import { v4 as uuidv4 } from "uuid";
import jwt from "jsonwebtoken";
import { NextResponse } from "next/server";

export const POST = async (req: Request) => {
  try {
    if (process.env.SECRET_KEY) {
      const conn = connectDb();
      const body = await req.json();

      const resp = await conn`INSERT INTO users (id, name, email)
      VALUES (${uuidv4()}, ${body.username} ,${body.email})
      RETURNING *`;
      const token = jwt.sign(resp[0].id, process.env.SECRET_KEY);
      return new NextResponse(JSON.stringify({ authToken: token }));
    }
  } catch (error) {
    console.log("🚀 ~ file: route.ts:16 ~ POST ~ error:", error);
  }
};
