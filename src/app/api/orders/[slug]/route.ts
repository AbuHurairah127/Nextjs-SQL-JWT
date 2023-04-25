import connectDb from "@/lib/db";
import { IGetUserAuthInfoRequest, authUser } from "@/utils/auth";
import { NextResponse } from "next/server";

export const GET = async (
  req: IGetUserAuthInfoRequest,
  { params }: { params: { slug: string } }
) => {
  try {
    const conn = connectDb();
    await authUser(req);
    if (req.user) {
      const orders = await conn`SELECT id, customerName,bookIsbn FROM orders
        WHERE customerId = ${req.user} AND id = ${params.slug}`;
      if (orders.length > 0)
        return new NextResponse(JSON.stringify({ order: orders[0] }));
    }
    return new NextResponse(
      JSON.stringify({ status: 200, message: "Invalid Order Id.!" })
    );
  } catch (error) {
    return new NextResponse(
      JSON.stringify({ status: 500, message: "Internal Server Error." })
    );
  }
};
export const DELETE = async (
  req: IGetUserAuthInfoRequest,
  { params }: { params: { slug: string } }
) => {
  try {
    const conn = connectDb();
    await authUser(req);
    if (req.user) {
      const order = await conn`SELECT id, customerName,bookIsbn FROM orders
    WHERE customerId = ${req.user} AND id = ${params.slug}`;
      if (order.length > 0) {
        const orders = await conn`DELETE FROM orders
          WHERE customerId = ${req.user} AND id = ${params.slug}`;
      } else {
        return new NextResponse(
          JSON.stringify({ status: 200, message: "Invalid Order Id.!" })
        );
      }
    }
    return new NextResponse(
      JSON.stringify({ status: 200, message: "Successfully deleted an order." })
    );
  } catch (error) {
    return new NextResponse(
      JSON.stringify({ status: 500, message: "Internal Server Error." })
    );
  }
};
export const PATCH = async (
  req: IGetUserAuthInfoRequest,
  { params }: { params: { slug: string } }
) => {
  try {
    const conn = connectDb();
    await authUser(req);
    const body = await req.json();

    if (req.user) {
      const order = await conn`SELECT id, customerName,bookIsbn FROM orders
    WHERE customerId = ${req.user} AND id = ${params.slug}`;
      if (order.length > 0) {
        if (body.customerName) {
          const orders = await conn`UPDATE orders
          SET customerName = ${body.customerName}
            WHERE customerId = ${req.user} AND id = ${params.slug}
            RETURNING id, customerName, bookIsbn`;
        } else {
          return new NextResponse(
            JSON.stringify({ message: "Enter 'customerName' to update." })
          );
        }
      } else {
        return new NextResponse(
          JSON.stringify({ status: 200, message: "Invalid Order Id.!" })
        );
      }
    }
    return new NextResponse(
      JSON.stringify({
        status: 200,
        message: "Successfully updated an order.",
      })
    );
  } catch (error) {
    console.log("🚀 ~ file: route.ts:87 ~ error:", error);
    return new NextResponse(
      JSON.stringify({ status: 500, message: "Internal Server Error." })
    );
  }
};
