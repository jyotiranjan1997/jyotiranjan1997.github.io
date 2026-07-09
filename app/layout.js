import "./globals.css";

export const metadata = {
  metadataBase: new URL("https://jyotiranjan1997.github.io"),

  title: {
    default: "Jyotiranjan Mohanty | Senior Full Stack Developer (MERN)",
    template: "%s | Jyotiranjan Mohanty",
  },

  description:
    "Senior Full Stack Developer specializing in MERN Stack, React.js, Next.js, Node.js, Express.js, MongoDB, SQL Server, REST APIs, CRM development, and cloud deployment.",

  keywords: [
    "Jyotiranjan Mohanty",
    "Senior Full Stack Developer",
    "MERN Stack Developer",
    "React Developer",
    "Next.js Developer",
    "Node.js Developer",
    "Express.js",
    "MongoDB",
    "SQL Server",
    "JavaScript",
    "TypeScript",
    "Portfolio",
    "CRM Developer",
    "REST API",
    "GitHub Portfolio",
    "India",
  ],

  authors: [
    {
      name: "Jyotiranjan Mohanty",
      url: "https://jyotiranjan1997.github.io",
    },
  ],

  creator: "Jyotiranjan Mohanty",
  publisher: "Jyotiranjan Mohanty",

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },

  alternates: {
    canonical: "/",
  },

  icons: {
    icon: [
      { url: "/favicon.ico" },
      { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
    ],
    shortcut: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },

  manifest: "/site.webmanifest",

  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://jyotiranjan1997.github.io",
    title: "Jyotiranjan Mohanty | Senior Full Stack Developer",
    description:
      "Portfolio of Jyotiranjan Mohanty showcasing MERN Stack, React, Next.js, Node.js, SQL Server, MongoDB, and cloud deployment projects.",
    siteName: "Jyotiranjan Mohanty Portfolio",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Jyotiranjan Mohanty Portfolio",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "Jyotiranjan Mohanty | Senior Full Stack Developer",
    description:
      "Portfolio showcasing MERN Stack, React, Next.js, Node.js, SQL Server and cloud projects.",
    images: ["/og-image.png"],
  },
};

export const viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#070b14",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="bg-ink text-white font-sans antialiased">
        {children}
      </body>
    </html>
  );
}
