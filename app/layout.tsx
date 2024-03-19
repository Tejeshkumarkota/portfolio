import type { Metadata } from "next";
import { Space_Grotesk } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";

const spaceGrotesk = Space_Grotesk({ subsets: ["latin"] });

export const metadata: Metadata = {
	metadataBase: new URL("https://my-portfolio-tejesh.netlify.app/"),

	title: "K Tejesh Kumar",
	authors: {
		name: "tejesh",
	},

	description:
		"Based in Bengaluru, I'm a UI Developer passionate about building a modern web application that users love.",
	openGraph: {
		title: "K Tejesh Kumar",
		description:
			"Based in Bengaluru, I'm a UI Developer passionate about building a modern web application that users love.",
		url: "https://my-portfolio-tejesh.netlify.app/",
		siteName: "K Tejesh Kumar",
		images: "/logo.webp",
		type: "website",
	},
	keywords: ["daily web coding", "tejesh kumar", "dailywebcoding"],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={spaceGrotesk.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
