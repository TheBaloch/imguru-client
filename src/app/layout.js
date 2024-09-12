export const metadata = {
  title: "Natty NYC",
  icons: {
    icon: "/favicon.ico",
    apple: "/favicon.ico",
    other: {
      url: "/favicon.ico",
    },
  },
};

export default function Layout({ children }) {
  return (
    <html>
      <body>{children}</body>
    </html>
  );
}
