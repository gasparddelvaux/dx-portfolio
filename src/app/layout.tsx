import type { Metadata } from "next";
import "./globals.css";
import "./custom.css";
import { ThemeProvider } from "@/components/providers/theme-provider";

export const metadata: Metadata = {
  title: "Gaspard Delvaux | Développeur full-stack",
  description:
    "Hi! I'm Gaspard, a full-stack developer based in Belgium. I'm passionate about web development, design, and theme parks.",
  authors: {
    name: "Gaspard Delvaux",
    url: "https://gaspard.delvaux.dev",
  },
  applicationName: "Gaspard Delvaux",
  robots: { index: true, follow: true },
  keywords: [
    "Gaspard Delvaux",
    "Développeur web",
    "Web developer",
    "Développeur full-stack",
    "Full-stack developer",
    "Développeur junior",
    "Junior developer",
    "Belgique",
    "Belgium",
    "Web development",
    "Développement web",
    "Design",
    "Parcs d'attractions",
    "Theme parks",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
