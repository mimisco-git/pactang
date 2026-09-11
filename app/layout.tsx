import type { Metadata } from "next";
import "./globals.css";
import Smooth from "@/components/Smooth";

export const metadata: Metadata = {
  title: "PactaNG | Post-award procurement control",
  description: "Variations, notices, evidence, integrity and settlement for Nigerian public contracts.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="min-h-screen antialiased">
        <Smooth>{children}</Smooth>
      </body>
    </html>
  );
}
