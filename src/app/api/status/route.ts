import connectDb from "@/lib/db";
import { NextRequest, NextResponse } from "next/server";
import postgres from "postgres";

export async function GET(req: NextRequest) {
  try {
    const conn = connectDb();
    await conn`SELECT 1`;

    await conn.end();
    return new NextResponse(
      JSON.stringify("Welcome to the book store API developed by Abu Hurairah")
    );
  } catch (error) {
    console.log("Database not connected.");
  }
}
