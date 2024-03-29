"use client"
import Navbar from "@/components/Navbar";
import "./globals.css";
import { Provider } from "react-redux";
import {store} from '../store/store'
import HandleInitialState from "@/components/HandleInitialState";
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <Provider store={store}>
      <HandleInitialState />
    <html lang="en">
      <body>
        <Navbar />

        {children}
      </body>
    </html>
   
    </Provider>
  );
}
