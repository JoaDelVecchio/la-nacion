import "./globals.css";

export const metadata = {
  title: "Acumulado",
  description:
    "Las últimas noticias de Argentina y el mundo en un solo lugar. Política, economía, deportes y más en La Nación.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link
          rel="preload"
          href="/fonts/suecaslab-medium-webfont.woff"
          as="font"
          type="font/woff"
          crossOrigin="anonymous"
        />
        <link
          rel="preload"
          href="/fonts/suecaslab-bold-webfont.woff"
          as="font"
          type="font/woff"
          crossOrigin="anonymous"
        />
        <link
          rel="preload"
          href="/fonts/ln-logos.woff"
          as="font"
          type="font/woff"
          crossOrigin="anonymous"
        />
      </head>
      <body className={`antialiased`}>{children}</body>
    </html>
  );
}
