import connectDb from "@/lib/db";
import { IGetUserAuthInfoRequest, authUser } from "@/utils/auth";
import { NextRequest, NextResponse } from "next/server";

export const POST = async (req: IGetUserAuthInfoRequest) => {
  try {
    const conn = connectDb();
    await authUser(req);

    const body = await req.json();
    if (body.bookIsbn && body.customerName && req.user) {
      const resp =
        await conn`INSERT INTO orders (bookIsbn, customerName,customerId)
    VALUES ( ${body.bookIsbn} ,${body.customerName},${req.user})
    RETURNING (id)`;

      return new NextResponse(
        JSON.stringify({
          message: `You have successfully posted an order. Your order Id is ${resp[0].id}`,
        })
      );
    } else {
      return new NextResponse(
        JSON.stringify({ message: "'bookIsbn' or 'customerName' is missing." })
      );
    }
  } catch (error) {
    return new NextResponse(
      JSON.stringify({ message: "Internal server error." })
    );
  }
};
export const GET = async (req: IGetUserAuthInfoRequest) => {
  try {
    const conn = connectDb();
    await authUser(req);
    if (req.user) {
      const resp = await conn`SELECT id,customerName,bookIsbn FROM orders
    WHERE customerId =${req.user}
    `;
      console.log(resp);
    } else {
      return new NextResponse(JSON.stringify({ message: "'Access Denied." }));
    }
  } catch (error) {
    return new NextResponse(
      JSON.stringify({ message: "Internal server error." })
    );
  }
};
