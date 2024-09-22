import CountrySearchBlock from "@/components/search/country/countrySearchBlock";
import ExploreAllCountries from "@/components/country/exploreAllCountry";
import CountryBlock from "@/components/country/countryBlock";
import PassportBlock from "@/components/passport/passportBlock";
import ExploreAllPassports from "@/components/passport/exportAllPassport";

// const translations = {
//   en: {
//     title: "Natty NYC - Discover NYC’s Best Skincare and Cosmetics Trends",
//     description:
//       "Welcome to Natty NYC, your ultimate resource for the latest skincare and cosmetics trends, tips, and reviews straight from New York City. Explore expert advice and stay radiant with our in-depth insights.",
//     keywords:
//       "skincare NYC, cosmetics NYC, beauty trends, skincare tips, NYC beauty reviews, expert advice, Natty NYC ",
//   },
//   es: {
//     title:
//       "Natty NYC - Descubre las Mejores Tendencias de Cuidado de la Piel y Cosméticos en NYC",
//     description:
//       "Bienvenido a Natty NYC , tu recurso definitivo para las últimas tendencias en cuidado de la piel y cosméticos, consejos y reseñas directamente desde la ciudad de Nueva York. Explora consejos de expertos y mantente radiante con nuestras perspectivas detalladas.",
//     keywords:
//       "cuidado de la piel NYC, cosméticos NYC, tendencias de belleza, consejos de cuidado de la piel, reseñas de belleza NYC, consejos de expertos, Natty NYC ",
//   },
//   fr: {
//     title:
//       "Natty NYC - Découvrez les Meilleures Tendances en Soins de Peau et Cosmétiques à NYC",
//     description:
//       "Bienvenue sur Natty NYC , votre ressource ultime pour les dernières tendances en soins de peau et cosmétiques, conseils et avis directement de New York. Découvrez les conseils d'experts et restez radieuse grâce à nos analyses approfondies.",
//     keywords:
//       "soins de peau NYC, cosmétiques NYC, tendances beauté, conseils en soins de peau, avis beauté NYC, conseils d'experts, Natty NYC ",
//   },
//   de: {
//     title:
//       "Natty NYC - Entdecken Sie die Neuesten Trends in Hautpflege und Kosmetik aus NYC",
//     description:
//       "Willkommen bei Natty NYC , Ihrer ultimativen Quelle für die neuesten Trends in Hautpflege und Kosmetik, Tipps und Bewertungen direkt aus New York City. Erforschen Sie Expertenrat und bleiben Sie strahlend mit unseren umfassenden Einblicken.",
//     keywords:
//       "Hautpflege NYC, Kosmetik NYC, Schönheitstrends, Hautpflegetipps, NYC Beauty-Bewertungen, Expertenrat, Natty NYC ",
//   },
//   pt: {
//     title:
//       "Natty NYC - Descubra as Melhores Tendências de Cuidados com a Pele e Cosméticos em NYC",
//     description:
//       "Bem-vindo ao Natty NYC , seu recurso definitivo para as últimas tendências em cuidados com a pele e cosméticos, dicas e análises diretamente de Nova Iorque. Explore conselhos de especialistas e mantenha-se radiante com nossas percepções detalhadas.",
//     keywords:
//       "cuidados com a pele NYC, cosméticos NYC, tendências de beleza, dicas de cuidados com a pele, análises de beleza NYC, conselhos de especialistas, Natty NYC ",
//   },
//   ar: {
//     title:
//       "Natty NYC - اكتشف أحدث اتجاهات العناية بالبشرة ومستحضرات التجميل في NYC",
//     description:
//       "مرحبًا بكم في Natty NYC ، مصدركم المثالي لأحدث اتجاهات العناية بالبشرة ومستحضرات التجميل، والنصائح، والمراجعات مباشرة من مدينة نيويورك. استكشف نصائح الخبراء وابقَ متألقًا بفضل تحليلاتنا المتعمقة.",
//     keywords:
//       "العناية بالبشرة NYC, مستحضرات التجميل NYC, اتجاهات الجمال, نصائح العناية بالبشرة, مراجعات الجمال NYC, نصائح الخبراء, Natty NYC ",
//   },
// };

// export async function generateMetadata({ params: { locale } }) {
//   const translation = translations[locale] || translations.en;

//   return {
//     title: translation.title,
//     description: translation.description,
//     keywords: translation.keywords,
//     authors: [{ name: "Natty NYC Editorial Team" }],
//     openGraph: {
//       title: translation.title,
//       description: translation.description,
//       url: `https://imguru.ae/${locale}`,
//       siteName: "Natty NYC ",
//       images: [
//         {
//           url: "https://imguru.ae/favicon.ico",
//           width: 50,
//           height: 50,
//           alt: "NattyNYC icon",
//         },
//       ],
//       locale: locale,
//       type: "website",
//     },
//     icons: {
//       icon: "https://imguru.ae/favicon.ico",
//       apple: "https://imguru.ae/favicon.ico",
//     },
//     alternates: {
//       canonical: `https://imguru.ae/${locale}`,
//       languages: {
//         en: "https://imguru.ae/en",
//         es: "https://imguru.ae/es",
//         fr: "https://imguru.ae/fr",
//         de: "https://imguru.ae/de",
//         ar: "https://imguru.ae/ar",
//         pt: "https://imguru.ae/pt",
//       },
//     },
//     robots: "index, follow",
//   };
// }

export async function generateMetadata({ params: { locale } }) {
  //const translation = translations[locale] || translations.en;

  return {
    title: "Imguru - Home",
    authors: [{ name: "Immigrations Guru Team" }],
    openGraph: {
      url: `https://imguru.ae/${locale}`,
      siteName: "Imguru",
      images: [
        {
          url: "https://imguru.ae/favicon.ico",
          width: 50,
          height: 50,
          alt: "Imguru icon",
        },
      ],
      locale: locale,
      type: "website",
    },
    icons: {
      icon: "https://imguru.ae/favicon.ico",
      apple: "https://imguru.ae/favicon.ico",
    },
    alternates: {
      canonical: `https://imguru.ae/${locale}`,
      languages: {
        en: "https://imguru.ae",
        es: "https://imguru.ae/es",
        fr: "https://imguru.ae/fr",
        de: "https://imguru.ae/de",
        ar: "https://imguru.ae/ar",
        pt: "https://imguru.ae/pt",
      },
    },
    robots: "index, follow",
  };
}

export default function Home({ params: { locale } }) {
  return (
    <main className="min-h-screen">
      <CountrySearchBlock />
      <CountryBlock locale={locale} limit={10} page={2} />
      <ExploreAllCountries />
      <PassportBlock locale={locale} limit={10} page={1} />
      <ExploreAllPassports />
    </main>
  );
}
