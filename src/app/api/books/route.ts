import connectDb from "@/app/lib/db";
import { NextRequest, NextResponse } from "next/server";

export const GET = async (req: NextRequest) => {
  try {
    const conn = connectDb();
    const { searchParams } = new URL(req.url);
    const id = searchParams.get("id");
    console.log("🚀 ~ file: route.ts:9 ~ GET ~ id:", id);
    if (id) {
      const books = await conn`SELECT * FROM books
      WHERE id = ${id}`;
      console.log("🚀 ~ file: route.ts:13 ~ GET ~ books:", books[0]);
      return new NextResponse(JSON.stringify({ book: books[0] }));
    }
    const books = await conn`SELECT * FROM books`;
    return new NextResponse(JSON.stringify({ books }));
  } catch (error) {
    JSON.stringify({ status: 500, message: "Internal Server Error." });
  }
};
