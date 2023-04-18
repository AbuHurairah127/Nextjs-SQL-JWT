import connectDb from "@/lib/db";
import { NextRequest, NextResponse } from "next/server";

export const GET = async (
  req: NextRequest,
  { params }: { params: { slug: string } }
) => {
  try {
    const conn = connectDb();
    const books = await conn`SELECT * FROM books
      WHERE id = ${params.slug}`;
    if (books.length > 0)
      return new NextResponse(JSON.stringify({ book: books[0] }));
    return new NextResponse(
      JSON.stringify({ status: 200, message: "Invalid Book Id.!" })
    );
  } catch (error) {
    return new NextResponse(
      JSON.stringify({ status: 500, message: "Internal Server Error." })
    );
  }
};
