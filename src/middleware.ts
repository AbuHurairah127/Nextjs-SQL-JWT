import { type NextRequest, NextResponse } from "next/server";
import { verifyAuth } from "./lib/auth";

const middleware = async (req: NextRequest) => {
  const token = req.headers.get("token");
  if (!token) {
    return new NextResponse(JSON.stringify({ message: "Token not found" }));
  }
  const verifiedToken = await verifyAuth(token);
  if (!verifiedToken) {
    return new NextResponse(JSON.stringify({ message: "Invalid Token." }));
  }
  return NextResponse.next();
};
export default middleware;

export const config = {
  matcher: ["/api/orders", "/api/orders/:slug*"],
};
