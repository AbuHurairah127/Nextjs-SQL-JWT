import axios from "axios";
const useBooksTable = () => {
  const fetchDetails = async (id: number) => {
    try {
      console.log(`https://simple-books-api.glitch.me/books/${id}`);
      const res = await axios.get(
        `https://simple-books-api.glitch.me/books/${id}`
      );

      console.log("🚀 ~ file: useBooksTable.tsx:7 ~ fetchDetails ~ res:", res);
    } catch (error) {
      console.log(
        "🚀 ~ file: useBooksTable.tsx:12 ~ fetchDetails ~ error:",
        error
      );
    }
    // if (!res.ok) {
    //   throw new Error("Failed to fetch data");
    // }
  };

  // console.log(res.json());

  // return res.json();

  const orderABook = () => {};
  return { fetchDetails };
};

export default useBooksTable;
