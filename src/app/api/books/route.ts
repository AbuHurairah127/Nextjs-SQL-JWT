import connectDb from "@/app/lib/db";
import { NextRequest, NextResponse } from "next/server";

export const GET = async (req: NextRequest) => {
  try {
    const conn = connectDb();
    const books = await conn`SELECT * FROM books`;
    return new NextResponse(JSON.stringify({ books }));
  } catch (error) {
    JSON.stringify({ status: 500, message: "Internal Server Error." });
  }
};
