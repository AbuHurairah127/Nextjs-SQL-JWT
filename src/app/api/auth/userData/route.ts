import connectDb from "@/app/lib/db";
import { type NextRequest, NextResponse } from "next/server";
import jwt, { JwtPayload } from "jsonwebtoken";
export const GET = async (req: NextRequest) => {
  try {
    connectDb();
    const token = req.headers.get("token");
    if ((process.env.SECRET_KEY, token)) {
      const data = jwt.verify(token, process.env.SECRET_KEY!) as JwtPayload;
      console.log("🚀 ~ file: route.ts:10 ~ GET ~ data:", data);
    }
  } catch (error) {
    console.log("🚀 ~ file: route.ts:16 ~ POST ~ error:", error);
    return new NextResponse(
      JSON.stringify({ status: 500, message: "Internal Server Error." })
    );
  }
};
