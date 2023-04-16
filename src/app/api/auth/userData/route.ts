import connectDb from "@/app/lib/db";
import { type NextRequest, NextResponse } from "next/server";
import jwt, { JwtPayload } from "jsonwebtoken";
import { authUser } from "@/app/lib/auth";
export const GET = async (req: NextRequest) => {
  try {
    const userId = authUser(req);
    const conn = connectDb();
    const user = await conn`SELECT * FROM users
      WHERE id = ${userId!}`;
    return new NextResponse(JSON.stringify({ user: user[0] }));
  } catch (error) {
    console.log("🚀 ~ file: route.ts:16 ~ POST ~ error:", error);
    return new NextResponse(
      JSON.stringify({ status: 500, message: "Internal Server Error." })
    );
  }
};
