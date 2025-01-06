import { Inter } from "next/font/google";
import "./globals.css";
 const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Sopsic - Music Streaming Website",
  description:
    "Stream and download music from JioSaavn library. Modern music streaming experience inspired by JioSaavn and Spotify.",
  keywords:
    "music streaming, JioSaavn, music download, online music, songs, albums, playlists",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <script
          async
          src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-1828915420581549"
          crossOrigin="anonymous"
        ></script>
      </head>
      <body className={inter.className}>
        {children}
       </body>
    </html>
  );
}
