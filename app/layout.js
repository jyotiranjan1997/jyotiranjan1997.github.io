import "./globals.css";
export const metadata = {
  title: "Jyotiranjan Mohanty | Senior Full Stack Developer | MERN & Next.js",
  description:
    "Portfolio of Jyotiranjan Mohanty, Senior Full Stack Developer specializing in MERN Stack, Next.js, React, Node.js, SQL Server, MongoDB, cloud deployment, and scalable web applications.",

  keywords: [
    "Jyotiranjan Mohanty",
    "Full Stack Developer",
    "MERN Developer",
    "React Developer",
    "Next.js Developer",
    "Node.js Developer",
    "JavaScript Developer",
    "MongoDB",
    "SQL Server",
    "Portfolio",
  ],

  authors: [{ name: "Jyotiranjan Mohanty" }],
  creator: "Jyotiranjan Mohanty",

  openGraph: {
    title: "Jyotiranjan Mohanty | Senior Full Stack Developer",
    description:
      "Explore my portfolio showcasing MERN Stack, Next.js, React, Node.js, SQL Server, MongoDB, and cloud deployment.",
    url: "https://jyotiranjan1997.github.io/",
    siteName: "Jyotiranjan Mohanty Portfolio",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Jyotiranjan Mohanty Portfolio",
      },
    ],
    locale: "en_US",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "Jyotiranjan Mohanty | Senior Full Stack Developer",
    description:
      "Portfolio showcasing MERN Stack, React, Next.js, and Node.js projects.",
    images: ["/JyotiranjanMohanty.png"],
  },

  robots: {
    index: true,
    follow: true,
  },

  alternates: {
    canonical: "https://jyotiranjan1997.github.io/",
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
