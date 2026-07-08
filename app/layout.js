import "./globals.css";

export const metadata = {
  title: "Jyotiranjan Mohanty | Senior Full Stack Developer (MERN)",
  description:
    "Senior Full Stack Developer with 3+ years of experience building web applications, CRM systems, and REST APIs using the MERN stack. Explore my experience, projects, and skills.",
  keywords: [
    "Jyotiranjan Mohanty",
    "Full Stack Developer",
    "MERN Stack Developer",
    "React Developer",
    "Node.js Developer",
    "Portfolio",
  ],
  authors: [{ name: "Jyotiranjan Mohanty" }],
  openGraph: {
    title: "Jyotiranjan Mohanty | Senior Full Stack Developer (MERN)",
    description:
      "Senior Full Stack Developer with 3+ years of experience building web applications, CRM systems, and REST APIs using the MERN stack.",
    url: "https://jyotiranjan1997.github.io/",
    siteName: "Jyotiranjan Mohanty Portfolio",
    type: "website",
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
