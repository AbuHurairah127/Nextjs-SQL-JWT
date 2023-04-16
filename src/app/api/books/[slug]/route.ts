import connectDb from "@/app/lib/db";
import { NextRequest, NextResponse } from "next/server";

export const GET = async (
  req: NextRequest,
  { params }: { params: { slug: string } }
) => {
  try {
    const conn = connectDb();
    const books = await conn`SELECT * FROM books
      WHERE id = ${params.slug}`;
    return new NextResponse(JSON.stringify({ book: books[0] }));
  } catch (error) {
    JSON.stringify({ status: 500, message: "Internal Server Error." });
  }
};
