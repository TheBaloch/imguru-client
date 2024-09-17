import { GoogleTagManager } from "@next/third-parties/google";
import "./globals.css";
import Navbar from "@/components/layout/navbar/navbar";
import Footer from "@/components/layout/footer/footer";
import initTranslations from "../i18n";
import TranslationsProvider from "@/contexts/TranslationsProvider";
import Header from "@/components/layout/header/header";

export const metadata = {
  title: "Imguru",
  icons: {
    icon: "/favicon.ico",
    apple: "/favicon.ico",
    other: {
      url: "/favicon.ico",
    },
  },
};

export default async function RootLayout({ children, params: { locale } }) {
  const { resources } = await initTranslations(locale, ["common"]);
  return (
    <TranslationsProvider
      namespaces={["common"]}
      locale={locale}
      resources={resources}
    >
      <html lang={locale}>
        <head>
          <script
            async
            src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-3642221070800642"
            crossOrigin="anonymous"
          ></script>
        </head>
        {/* <GoogleTagManager gtmId="GTM-59G8C6WF" /> */}
        <body>
          {/* <noscript>
            <iframe
              src="https://www.googletagmanager.com/ns.html?id=GTM-59G8C6WF"
              height="0"
              width="0"
              style={{ display: "none", visibility: "hidden" }}
            ></iframe>
          </noscript> */}

          <Navbar locale={locale} />
          {/* <Header /> */}
          {children}
          <Footer locale={locale} />
        </body>
      </html>
    </TranslationsProvider>
  );
}
