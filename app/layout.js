import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "F block Elements - by Abhay",
  description: "Learn about f block elements, lanthanides, actinides in fun and intresting way.",
  authors: [
    {
      name: "Abhay Patel",
      url: "https://www.f-block-elements.vercel.app",
    },
  ],
  creator: "Abhay Patel",
  publisher: "Abhay Patel",
  
  
  themeColor: "#1e3a8a",
  colorScheme: "dark",
  openGraph: {
    title: "F block Elements - by Abhay",
    description: "Stay updated with the latest news and current affairs in India",
    url: "Learn about f block elements, lanthanides, actinides in fun and intresting way.",
    siteName: "Indian World Times",
    images: [
      {
        url: "https://media.geeksforgeeks.org/wp-content/uploads/20240206174530/F-Block-Elements.png",
        width: 1200,
        height: 630,
        alt: "F block",
      },
    ],
    type: "website",
    locale: "en_US",
    
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
    <head> 
    <meta name="google-site-verification" content="7-6j7haeyJWEhikD2wtLIv8Ei8tdX7VOIO3amkGNYdo" />
    </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
