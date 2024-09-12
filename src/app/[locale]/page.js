import LatestBlogs from "@/components/blog/latestBlogs";
import AllCategoryBlock from "@/components/category/allCategoryBlock";
import CategoryBlock from "@/components/category/categoryBlock";

const translations = {
  en: {
    title: "Natty NYC - Discover NYC’s Best Skincare and Cosmetics Trends",
    description:
      "Welcome to Natty NYC, your ultimate resource for the latest skincare and cosmetics trends, tips, and reviews straight from New York City. Explore expert advice and stay radiant with our in-depth insights.",
    keywords:
      "skincare NYC, cosmetics NYC, beauty trends, skincare tips, NYC beauty reviews, expert advice, Natty NYC ",
  },
  es: {
    title:
      "Natty NYC - Descubre las Mejores Tendencias de Cuidado de la Piel y Cosméticos en NYC",
    description:
      "Bienvenido a Natty NYC , tu recurso definitivo para las últimas tendencias en cuidado de la piel y cosméticos, consejos y reseñas directamente desde la ciudad de Nueva York. Explora consejos de expertos y mantente radiante con nuestras perspectivas detalladas.",
    keywords:
      "cuidado de la piel NYC, cosméticos NYC, tendencias de belleza, consejos de cuidado de la piel, reseñas de belleza NYC, consejos de expertos, Natty NYC ",
  },
  fr: {
    title:
      "Natty NYC - Découvrez les Meilleures Tendances en Soins de Peau et Cosmétiques à NYC",
    description:
      "Bienvenue sur Natty NYC , votre ressource ultime pour les dernières tendances en soins de peau et cosmétiques, conseils et avis directement de New York. Découvrez les conseils d'experts et restez radieuse grâce à nos analyses approfondies.",
    keywords:
      "soins de peau NYC, cosmétiques NYC, tendances beauté, conseils en soins de peau, avis beauté NYC, conseils d'experts, Natty NYC ",
  },
  de: {
    title:
      "Natty NYC - Entdecken Sie die Neuesten Trends in Hautpflege und Kosmetik aus NYC",
    description:
      "Willkommen bei Natty NYC , Ihrer ultimativen Quelle für die neuesten Trends in Hautpflege und Kosmetik, Tipps und Bewertungen direkt aus New York City. Erforschen Sie Expertenrat und bleiben Sie strahlend mit unseren umfassenden Einblicken.",
    keywords:
      "Hautpflege NYC, Kosmetik NYC, Schönheitstrends, Hautpflegetipps, NYC Beauty-Bewertungen, Expertenrat, Natty NYC ",
  },
  pt: {
    title:
      "Natty NYC - Descubra as Melhores Tendências de Cuidados com a Pele e Cosméticos em NYC",
    description:
      "Bem-vindo ao Natty NYC , seu recurso definitivo para as últimas tendências em cuidados com a pele e cosméticos, dicas e análises diretamente de Nova Iorque. Explore conselhos de especialistas e mantenha-se radiante com nossas percepções detalhadas.",
    keywords:
      "cuidados com a pele NYC, cosméticos NYC, tendências de beleza, dicas de cuidados com a pele, análises de beleza NYC, conselhos de especialistas, Natty NYC ",
  },
  ar: {
    title:
      "Natty NYC - اكتشف أحدث اتجاهات العناية بالبشرة ومستحضرات التجميل في NYC",
    description:
      "مرحبًا بكم في Natty NYC ، مصدركم المثالي لأحدث اتجاهات العناية بالبشرة ومستحضرات التجميل، والنصائح، والمراجعات مباشرة من مدينة نيويورك. استكشف نصائح الخبراء وابقَ متألقًا بفضل تحليلاتنا المتعمقة.",
    keywords:
      "العناية بالبشرة NYC, مستحضرات التجميل NYC, اتجاهات الجمال, نصائح العناية بالبشرة, مراجعات الجمال NYC, نصائح الخبراء, Natty NYC ",
  },
};

export async function generateMetadata({ params: { locale } }) {
  const translation = translations[locale] || translations.en;

  return {
    title: translation.title,
    description: translation.description,
    keywords: translation.keywords,
    authors: [{ name: "Natty NYC Editorial Team" }],
    openGraph: {
      title: translation.title,
      description: translation.description,
      url: `https://blog.nattynyc.com/${locale}`,
      siteName: "Natty NYC ",
      images: [
        {
          url: "https://blog.nattynyc.com/favicon.ico",
          width: 50,
          height: 50,
          alt: "NattyNYC icon",
        },
      ],
      locale: locale,
      type: "website",
    },
    icons: {
      icon: "https://blog.nattynyc.com/favicon.ico",
      apple: "https://blog.nattynyc.com/favicon.ico",
    },
    alternates: {
      canonical: `https://blog.nattynyc.com/${locale}`,
      languages: {
        en: "https://blog.nattynyc.com/en",
        es: "https://blog.nattynyc.com/es",
        fr: "https://blog.nattynyc.com/fr",
        de: "https://blog.nattynyc.com/de",
        ar: "https://blog.nattynyc.com/ar",
        pt: "https://blog.nattynyc.com/pt",
      },
    },
    robots: "index, follow",
  };
}

export default function Home({ params: { locale } }) {
  return (
    <main>
      <LatestBlogs limit={6} locale={locale} />
      <CategoryBlock category={"skincare"} limit={6} locale={locale} />
      <AllCategoryBlock locale={locale} />
      <CategoryBlock category={"haircare"} limit={6} locale={locale} />
      <CategoryBlock category={"fragrance"} limit={6} locale={locale} />
      <CategoryBlock category={"beauty"} limit={6} locale={locale} />
      <CategoryBlock category={"supplements"} limit={6} locale={locale} />
    </main>
  );
}
