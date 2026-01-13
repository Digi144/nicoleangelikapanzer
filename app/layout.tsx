import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Lov Me - Finde deine wahre Essenz",
  description: "Entdecke deine innere Stärke und gestalte ein Leben, das du liebst. Mentoring mit Yoga, energetischer Arbeit und persönlicher Begleitung.",
  icons: {
    icon: "/favicon.webp",
    apple: "/favicon.webp",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="de">
      <body>{children}</body>
    </html>
  );
}

