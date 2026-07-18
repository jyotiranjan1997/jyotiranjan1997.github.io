import "./globals.css";

const SITE_URL = "https://www.jyotiranjantech.in";

export const metadata = {
  metadataBase: new URL(SITE_URL),

  title: {
    default: "Jyotiranjan Mohanty | Senior Full Stack Developer",
    template: "%s | Jyotiranjan Mohanty",
  },

  description:
    "Portfolio of Jyotiranjan Mohanty, a Senior Full Stack Developer specializing in MERN Stack, React.js, Next.js, Node.js, Express.js, MongoDB, SQL Server, REST APIs, CRM development, automation and cloud deployment.",

  keywords: [
    "Jyotiranjan Mohanty",
    "Jyotiranjan Mohanty Developer",
    "Jyotiranjan Tech",
    "Senior Full Stack Developer",
    "Full Stack Developer India",
    "MERN Stack Developer",
    "React Developer",
    "Next.js Developer",
    "Node.js Developer",
    "Express.js Developer",
    "MongoDB Developer",
    "SQL Server Developer",
    "CRM Developer",
    "REST API Developer",
    "JavaScript Developer",
    "TypeScript Developer",
    "Portfolio",
  ],

  authors: [
    {
      name: "Jyotiranjan Mohanty",
      url: SITE_URL,
    },
  ],

  creator: "Jyotiranjan Mohanty",
  publisher: "Jyotiranjan Mohanty",
  applicationName: "Jyotiranjan Mohanty Portfolio",

  category: "Technology",

  alternates: {
    canonical: SITE_URL,
  },

  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: false,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },

  icons: {
    icon: [
      {
        url: "/favicon.ico",
      },
      {
        url: "/favicon-16x16.png",
        sizes: "16x16",
        type: "image/png",
      },
      {
        url: "/favicon-32x32.png",
        sizes: "32x32",
        type: "image/png",
      },
    ],
    shortcut: "/favicon.ico",
    apple: [
      {
        url: "/apple-touch-icon.png",
        sizes: "180x180",
        type: "image/png",
      },
    ],
  },

  manifest: "/site.webmanifest",

  openGraph: {
    type: "profile",
    locale: "en_IN",
    url: SITE_URL,
    title: "Jyotiranjan Mohanty | Senior Full Stack Developer",
    description:
      "Senior Full Stack Developer specializing in MERN Stack, React, Next.js, Node.js, MongoDB, SQL Server, CRM development, automation and cloud deployment.",
    siteName: "Jyotiranjan Mohanty Portfolio",

    firstName: "Jyotiranjan",
    lastName: "Mohanty",

    images: [
      {
        url: `${SITE_URL}/JyotiranjanMohanty.png`,
        secureUrl: `${SITE_URL}/JyotiranjanMohanty.png`,
        width: 1200,
        height: 630,
        type: "image/png",
        alt: "Jyotiranjan Mohanty - Senior Full Stack Developer",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",

    // Add your real X username when available.
    // site: "@yourusername",
    // creator: "@yourusername",

    title: "Jyotiranjan Mohanty | Senior Full Stack Developer",
    description:
      "Portfolio showcasing MERN Stack, React, Next.js, Node.js, SQL Server, MongoDB, CRM development and cloud projects.",
    images: [`${SITE_URL}/JyotiranjanMohanty.png`],
  },

  other: {
    "profile:first_name": "Jyotiranjan",
    "profile:last_name": "Mohanty",
  },

  // Add this after Google Search Console provides the code.
  // verification: {
  //   google: "YOUR_GOOGLE_VERIFICATION_CODE",
  // },
};

export const viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  themeColor: "#070b14",
  colorScheme: "dark",
};

const personSchema = {
  "@context": "https://schema.org",
  "@type": "Person",
  "@id": `${SITE_URL}/#person`,

  name: "Jyotiranjan Mohanty",
  givenName: "Jyotiranjan",
  familyName: "Mohanty",

  url: SITE_URL,

  image: {
    "@type": "ImageObject",
    url: `${SITE_URL}/apple-icon.png`,
    width: 800,
    height: 800,
  },

  jobTitle: "Senior Full Stack Developer",

  description:
    "Senior Full Stack Developer specializing in MERN Stack, React.js, Next.js, Node.js, Express.js, MongoDB, SQL Server, CRM development, automation and cloud deployment.",

  knowsAbout: [
    "MERN Stack Development",
    "React.js",
    "Next.js",
    "Node.js",
    "Express.js",
    "MongoDB",
    "Microsoft SQL Server",
    "JavaScript",
    "TypeScript",
    "REST API Development",
    "CRM Development",
    "Cloud Deployment",
    "IIS Server",
    "GitHub Pages",
    "Web Automation",
  ],

  sameAs: [
    "https://github.com/jyotiranjan1997",

    // Replace these with your exact profile links:
    "https://www.linkedin.com/in/jyoti-ranjan-mohanty-81a240193/",
    "https://www.instagram.com/mohantyoo7?igsh=MTNyM3FoeDNsZ3R5eA%3D%3D&utm_source=qr",
    "https://www.facebook.com/share/1EHsgZS9Mf/?mibextid=wwXIfr",
    "https://x.com/jyotiranjan3250?s=11",
  ],
};

const profilePageSchema = {
  "@context": "https://schema.org",
  "@type": "ProfilePage",
  "@id": `${SITE_URL}/#profilepage`,

  url: SITE_URL,
  name: "Jyotiranjan Mohanty - Senior Full Stack Developer",
  description:
    "Official portfolio and professional profile of Jyotiranjan Mohanty.",

  mainEntity: {
    "@id": `${SITE_URL}/#person`,
  },

  dateCreated: "2026-07-01",
  dateModified: "2026-07-18",
};

const websiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  "@id": `${SITE_URL}/#website`,

  name: "Jyotiranjan Mohanty Portfolio",
  alternateName: [
    "Jyotiranjan Tech",
    "Jyotiranjan Mohanty Developer Portfolio",
  ],

  url: SITE_URL,

  description:
    "Official portfolio website of Jyotiranjan Mohanty, Senior Full Stack Developer.",

  publisher: {
    "@id": `${SITE_URL}/#person`,
  },

  inLanguage: "en-IN",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en-IN">
      <body className="bg-ink text-white font-sans antialiased">
        {children}

        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(personSchema).replace(/</g, "\\u003c"),
          }}
        />

        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(profilePageSchema).replace(/</g, "\\u003c"),
          }}
        />

        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(websiteSchema).replace(/</g, "\\u003c"),
          }}
        />
      </body>
    </html>
  );
}
