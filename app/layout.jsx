import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { ClerkProvider } from "@clerk/nextjs";
import { Toaster } from "sonner"


const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "PrepBridge - AI-Powered Mock Interview Platform",
  description: "Master your interviews with PrepBridge. Get instant AI-powered feedback, practice with realistic scenarios, and boost your confidence. Land your dream job today!",
  keywords: "mock interview, AI interview, interview practice, job preparation, interview feedback, career development",
  authors: [{ name: "Aditya Shelke" }],
  openGraph: {
    title: "PrepBridge - AI-Powered Mock Interview Platform",
    description: "Master your interviews with AI-powered feedback and realistic practice scenarios",
    type: "website",
  },
};

export default function RootLayout({ children }) {
  return (
    
    <ClerkProvider>
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Toaster></Toaster>
        {children}
      </body>
    </html>
    </ClerkProvider>

  );
}
