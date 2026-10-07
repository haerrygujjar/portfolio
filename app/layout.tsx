import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Hirendra Gujjar — Software Engineer",
  description:
    "Hirendra Gujjar is a staff-level software engineer building AI platforms and distributed systems.",
  openGraph: {
    title: "Hirendra Gujjar — Software Engineer",
    description: "AI platforms, distributed systems, and the teams behind them.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
