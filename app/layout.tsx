import type { Metadata } from "next";
import { ConvexAuthNextjsServerProvider } from "@convex-dev/auth/nextjs/server";

import "./globals.css";

import { Modals } from "@/components/provider/Modal";
import Toast from "@/components/theme/Toast";
import { ThemeProvider } from "@/components/provider/ThemeProvider";
import NetworkStatus from "@/components/provider/NetworkStatus";
import { ConvexClientProvider } from "@/components/provider/ConvexClientProvider";

export const metadata: Metadata = {
  title: "Canva Clone",
  description: "Let Build Canva Clone",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ConvexAuthNextjsServerProvider>
      <html lang="en" suppressHydrationWarning>
        {/* sans-serif */}
        <body className="font-serif dark:bg-dark">
          <ThemeProvider
            attribute="class"
            storageKey="canva"
            defaultTheme="light"
          >
            <NetworkStatus />
            <Toast />
            <ConvexClientProvider>{children}</ConvexClientProvider>
            <Modals />
          </ThemeProvider>
        </body>
      </html>
    </ConvexAuthNextjsServerProvider>
  );
}
