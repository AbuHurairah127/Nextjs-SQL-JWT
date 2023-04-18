import { NextRequest, NextResponse } from "next/server";
import jwt from "jsonwebtoken";
import { verifyAuth } from "@/utils/auth";

export const GET = async (token: string) => {
  console.log("🚀 ~ file: route.ts:5 ~ GET ~ token:", token);
  console.log("verify");
  const userId = await verifyAuth(token);
  console.log("payload");
};
