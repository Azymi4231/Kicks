"use client";
import { Inter } from "next/font/google";
import "../theme/globals.css";
import Header from "@/shared/components/header";
import Footer from "@/shared/components/footer/footer";
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
          <div className=" flex justify-center bg-Gray w-full h-screen overflow-x-hidden">
            <div className="flex px-6 py-3 flex-col gap-6 w-full max-w-7xl">
              <Header />
              {children}
              <Footer />
            </div>
          </div>
        </body>
      </html>
    </Provider>
  );
}
