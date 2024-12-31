import type { Metadata } from "next";
import { Plus_Jakarta_Sans, Archivo } from "next/font/google";
import { Container, CssBaseline, ThemeProvider } from "@mui/material";
import { AppRouterCacheProvider } from "@mui/material-nextjs/v15-appRouter";
import AiChat from "@/components/ai-chat";

import "./globals.css";
import theme from "@/components/ThemeRegistry";
import NavBar from "@/components/nav-bar";
import Footer from "@/components/footer";

const plusJakartaSans = Plus_Jakarta_Sans({
  variable: "--font-plus-jakarta-sans",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const archivo = Archivo({
  variable: "--font-archivo",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "ziv-Portfolio",
  description: "my personal portfolio website",
  icons: {
    icon: "/favicon.ico",
  },
  keywords: ["ziv", "portfolio", "ziv-portfolio", "ziv-kali"],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <meta name="viewport" content="initial-scale=1, width=device-width" />
        <link rel="icon" href="/favicon.ico" type="image/x-icon" sizes="any" />
      </head>
      <body className={`${plusJakartaSans.variable} ${archivo.variable} `}>
        <AppRouterCacheProvider>
          <ThemeProvider
            storageWindow={typeof window !== "undefined" ? window : null}
            disableTransitionOnChange
            theme={theme}
            defaultMode="system"
          >
            <CssBaseline />
            <Container maxWidth="xl">
              <NavBar />
              {children}
              <AiChat />
              <Footer />
            </Container>
          </ThemeProvider>
        </AppRouterCacheProvider>
      </body>
    </html>
  );
}
