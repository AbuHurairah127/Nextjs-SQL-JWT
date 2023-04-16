import ToastWrapper from "@/components/toastWrapper/ToastWrapper";
import "./globals.css";
import "react-toastify/dist/ReactToastify.css";

export const metadata = {
  title: "Book Store",
  description: "A book store where every tech related new books is available.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        {children}
        <ToastWrapper />
      </body>
    </html>
  );
}
