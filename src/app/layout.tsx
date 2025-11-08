"use client";
import { Inter } from "next/font/google";
import "../theme/globals.css";
import { Provider } from "react-redux";
import { store } from "@/redux/store";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({
                                     children,
                                   }: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <Provider store={store}>
      <html lang="en">
      <body className={`${inter.className}`}>
      <div>
          {children}
      </div>
      </body>
      </html>
    </Provider>
  );
}
