import type { Metadata } from "next";
import { Inter, DM_Sans } from "next/font/google";
import { Toaster } from "sonner";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const dmSans = DM_Sans({
  variable: "--font-dm-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "RepoGPT - AI Powered GitHub Repository Explorer",
  description:
    "Ask questions about any GitHub repository using AI-powered retrieval",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${inter.variable} ${dmSans.variable} antialiased bg-[#0B0F19] text-white selection:bg-blue-500/30 selection:text-white font-sans`}
      >
        {children}
        <Toaster
          theme="dark"
          position="top-right"
          richColors
          toastOptions={{
            style: {
              background: "#171717",
              border: "1px solid #262626",
              color: "#fff",
            },
          }}
        />
      </body>
    </html>
  );
}
