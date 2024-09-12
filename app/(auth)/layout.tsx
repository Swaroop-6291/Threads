import { ClerkProvider } from "@clerk/nextjs"
import { Inter } from "next/font/google"
import '../globals.css';
import { dark } from "@clerk/themes";

const inter=Inter({subsets:['latin']})
export const metadata={
    title:'Threads',
    description:'A Next.js 14 Meta threads Application'
}

export default function RootLayout({
    children,
}:{
    children:React.ReactNode,
})
{
    return (
        <ClerkProvider
        appearance={{
            baseTheme: dark,
          }}
        > 
            <html lang="en">
            <head>
            </head>
            <body className={`${inter.className} bg-dark-1 `}>
              <div className="w-full min-h-screen flex justify-center items-center">
                {children}
              </div>
            </body>
            </html>
        </ClerkProvider>
    )
}