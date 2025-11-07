import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import { ClerkProvider } from "@clerk/nextjs";
import { checkUser } from "@/lib/checkUser"; // ✅ import
import { Toaster } from "sonner";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Ai Powered Personal Finance Manager",
  description: "Expense Manager",
};

export default async function RootLayout({ children }) {
  // ✅ this will make sure user is inserted into Supabase on login/signup
  await checkUser();

  return (
    <ClerkProvider>
      <html lang="en">
        <body className={inter.className}>
          {/* header */}
          <Header />
          <main className="min-h-screen">{children}</main>
          {/* footer */}
          <Toaster richColors />
          <footer className="bg-blue-50 py-12">
            <div className="container mx-auto px-4 text-center text-gray-600">
              <p>Made By Code Blooded Team</p>
            </div>
          </footer>
        </body>
      </html>
    </ClerkProvider>
  );
}
