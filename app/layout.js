import React from "react";
import "./globals.css";

export const metadata = {
  title: '_',
  description: '_',
  keywords: '_',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  );
}