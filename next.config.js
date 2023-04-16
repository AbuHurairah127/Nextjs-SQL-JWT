/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
  },
  env: {
    PGHOST: "ep-polished-bonus-090881.ap-southeast-1.aws.neon.tech",
    PGDATABASE: "book_store",
    PGUSER: "AbuHurairah127",
    PGPASSWORD: "yPme8ZQJHV9A",
    SECRET_KEY: "abuHurairahisdoinghardworktobecomeAgoodDeveloper.",
  },
};

module.exports = nextConfig;
