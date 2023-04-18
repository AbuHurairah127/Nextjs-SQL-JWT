import postgres from "postgres";

const connectDb = () => {
  const conn = postgres({
    ssl: "require",
    host: process.env.PGHOST,
    database: process.env.PGDATABASE,
    user: process.env.PGUSER,
    password: process.env.PGPASSWORD,
  });

  return conn;
};
export default connectDb;
