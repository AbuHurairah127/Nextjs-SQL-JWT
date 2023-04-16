"use client";
import { BookType } from "@/app/page";
import React from "react";
import useBooksTable from "./useBooksTable";
const BooksTable = ({ books }: { books: BookType[] }) => {
  const { fetchDetails } = useBooksTable();
  return (
    <div className="relative p-5 md:w-3/4 overflow-x-auto shadow-md sm:rounded-lg">
      <table className="w-full text-sm text-left rounded-lg overflow-hidden">
        <thead className="text-md text-white uppercase bg-[#302b63]">
          <tr>
            <th scope="col" className="px-6 py-3 font-light text-center">
              Index no.{" "}
            </th>
            <th scope="col" className="px-6 py-3 font-thin text-center">
              Name
            </th>
            <th scope="col" className="px-6 py-3 font-thin text-center">
              Type
            </th>
            <th scope="col" className="px-6 py-3 font-thin text-center">
              Available
            </th>
            <th scope="col" className="px-6 py-3 font-thin text-center">
              Actions
            </th>
          </tr>
        </thead>
        <tbody>
          {books.map((book, i) => (
            <tr
              className="bg-white border-b border-b-[#302b63] text-center"
              key={i}
            >
              <td scope="row" className="">
                {book.id}
              </td>
              <td className="px-6 py-4 ">{book.name}</td>
              <td className="px-6 py-4 capitalize">{book.type}</td>
              <td className="px-6 py-4">{book.available ? "Yes" : "No"}</td>
              <td className="px-6 py-4 text-right flex justify-center">
                <button
                  type="button"
                  className={
                    "border border-[#302b63] px-3 py-1.5 rounded text-[#302b63]"
                  }
                  onClick={() => fetchDetails(book.id)}
                >
                  Details
                </button>
                <button
                  type="button"
                  className="bg-[#302b63] px-4 py-1.5 rounded text-white ml-3"
                >
                  Buy
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default BooksTable;
