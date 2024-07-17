import type { Metadata } from "next";

import { Providers } from "./chakra-provider";

export const metadata: Metadata = {
  title: "Stream Kuliah",
  description: "Kuliah berkitab di hujung jari",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
