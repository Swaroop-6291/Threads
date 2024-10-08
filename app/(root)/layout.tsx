import type { Metadata } from "next";
import {Inter} from 'next/font/google'
import "../globals.css";
import { ClerkProvider } from "@clerk/nextjs";
import TopBar from "@/components/shared/TopBar";
import BottomBar from "@/components/shared/BottomBar";
import LeftSideBar from "@/components/shared/LeftSideBar";
import RightSideBar from "@/components/shared/RightSideBar";
import { dark } from "@clerk/themes";

const inter=Inter({subsets:['latin']})

export const metadata: Metadata = {
  title: "Threads",
  description: 'A Next.js 14 Meta threads Application',
};

export default function RootLayout({
  children,
}:{
  children: React.ReactNode;
}) {
  return (
    <ClerkProvider
    appearance={{
      baseTheme: dark,
    }}
    >
      <html lang="en">
      <body
        className={`${inter.className}`}
      >
        <TopBar/>
        <main className="flex flex-row">
          <LeftSideBar/>
          <section className="main-container">
            <div className="w-full max-w-4xl">
             {children}
            </div>
          </section>
          
        </main>
        <BottomBar/>
      </body>
    </html>
  </ClerkProvider>
  );
}
