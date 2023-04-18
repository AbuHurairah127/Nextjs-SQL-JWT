import connectDb from "@/lib/db";
import { v4 as uuidv4 } from "uuid";
import jwt from "jsonwebtoken";
import { NextResponse } from "next/server";

export const POST = async (req: Request) => {
  try {
    if (process.env.SECRET_KEY) {
      const conn = connectDb();
      const body = await req.json();
      if (body.clientEmail && body.clientName) {
        const emailChk = await conn`SELECT email FROM users
          WHERE email = ${body.clientEmail}`;
        if (emailChk.length > 0) {
          return new NextResponse(
            JSON.stringify({ message: "Email already in use.", status: 400 })
          );
        }
        const resp = await conn`INSERT INTO users (id, name, email)
                VALUES (${uuidv4()}, ${body.clientName} ,${body.clientEmail})
                RETURNING *`;
        const data = {
          user: {
            id: resp[0].id,
          },
        };
        const token = jwt.sign(data, process.env.SECRET_KEY);
        return new NextResponse(JSON.stringify({ authToken: token }));
      }
    } else {
      return new NextResponse(
        JSON.stringify({ message: "clientName or clientEmail is missing." })
      );
    }
  } catch (error) {
    console.log("🚀 ~ file: route.ts:16 ~ POST ~ error:", error);
    return new NextResponse(
      JSON.stringify({ status: 500, message: "Internal Server Error." })
    );
  }
};
