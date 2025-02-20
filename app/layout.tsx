import "./globals.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Normeno Rest Area!",
  description: "Personal website and links collection",
  icons: {
    icon: "/favicon.ico"
  }
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-gradient-to-br from-white to-gray-200 text-white min-h-screen">
        {children}
      </body>
    </html>
  );
}
