import jwt, { JwtPayload } from "jsonwebtoken";
import { NextRequest } from "next/server";
import connectDb from "./db";

export const authUser = (req: NextRequest) => {
  const token = req.headers.get("token");
  if ((process.env.SECRET_KEY, token)) {
    const data = jwt.verify(token, process.env.SECRET_KEY!) as JwtPayload;
    return String(data);
  }
};
