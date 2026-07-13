import type { Metadata } from "next";
import "./globals.css";
export const metadata: Metadata = { title: "Nexus AI | Commercial Intelligence", description: "Sales, inventory, forecasting and purchase planning platform" };
export default function RootLayout({children}:{children:React.ReactNode}){return <html lang="en"><body>{children}</body></html>}
