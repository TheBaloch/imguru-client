import Image from "next/image";
import styles from "./page.module.css";
import initTranslations from "@/app/i18n";
import Link from "next/link";

async function getCountry(slug, locale) {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_API}/country/${slug}?lang=${locale}`,
    {
      cache: "no-cache",
    }
  );
  if (!res.ok) {
    return null;
  }
  return res.json();
}

export async function generateMetadata({ params: { slug, locale } }) {
  const data = await getCountry(slug, locale);
  const SEO = data?.SEO;

  return {
    metadataBase: new URL("https://imguru.ae"),
    title: data?.title || "Imguru - Country",
    description: SEO?.metaDescription || "Blog post description",
    keywords: SEO?.metaKeywords || "Imguru,Country",
    authors: [{ name: data?.author?.name || "Author" }],
    openGraph: {
      title: SEO?.OGtitle || data?.blog?.title,
      description: SEO?.OGdescription || SEO?.metaDescription,
      url: `/${locale}/country/${slug}`,
      siteName: "Immigrations Guru",
      images: [
        {
          url: data?.mainImage,
          width: 800,
          height: 450,
        },
      ],
      locale: locale,
      type: "article",
    },
    icons: {
      icon: "https://imguru.ae/favicon.ico",
      apple: "https://imguru.ae/favicon.ico",
    },
    alternates: {
      canonical: `/${locale}/country/${data?.slug}`,
      languages: {
        en: `https://imguru.ae/en/country/${data?.slug}`,
        es: `https://imguru.ae/es/country/${data?.slug}`,
        zh: `https://imguru.ae/zh/country/${data?.slug}`,
        ar: `https://imguru.ae/ar/country/${data?.slug}`,
        fr: `https://imguru.ae/fr/country/${data?.slug}`,
        de: `https://imguru.ae/de/country/${data?.slug}`,
        pt: `https://imguru.ae/pt/country/${data?.slug}`,
        ja: `https://imguru.ae/ja/country/${data?.slug}`,
        ru: `https://imguru.ae/ru/country/${data?.slug}`,
        ko: `https://imguru.ae/ko/country/${data?.slug}`,
        hi: `https://imguru.ae/hi/country/${data?.slug}`,
        it: `https://imguru.ae/it/country/${data?.slug}`,
      },
    },
    robots: {
      index: true,
      follow: true,
    },
  };
}

export default async function Page({ params: { locale, slug } }) {
  const country = await getCountry(slug, locale);
  const { t } = await initTranslations(locale, ["common"]);

  if (country)
    return (
      <div className="min-h-screen p-6 bg-gray-50">
        <nav aria-label="breadcrumb" className="py-2">
          <ol className="flex items-center space-x-2 text-sm text-gray-600">
            <li>
              <Link href="/" className="hover:text-gray-900 hover:underline">
                Home
              </Link>
            </li>
            <li className="flex items-center space-x-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-4 w-4"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                  clipRule="evenodd"
                />
              </svg>
              <Link
                href="/country"
                className="hover:text-gray-900 hover:underline"
              >
                Countries
              </Link>
            </li>
            <li className="flex items-center space-x-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-4 w-4"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                  clipRule="evenodd"
                />
              </svg>
              <span href="/country" className="text-gray-900">
                {country.name}
              </span>
            </li>
          </ol>
        </nav>
        <section className="max-w-4xl mx-auto">
          {/* Country Main Info */}
          <div className="mb-8">
            <h1 className="text-4xl font-bold mb-4 text-teal-700">
              {country.name}
            </h1>
            <div className="flex gap-4 mb-6">
              <Image
                src={country.mainImage}
                alt={`${country.name} main image`}
                width={500}
                height={500}
                className="rounded-lg shadow-md"
              />
              <div className="flex flex-col gap-2">
                <Image
                  src={country.passportImage}
                  alt={`${country.name} passport image`}
                  width={200}
                  height={200}
                  className="rounded-lg shadow-md"
                />
                <Image
                  src={country.flagImage}
                  alt={`${country.name} flag`}
                  width={50}
                  height={50}
                  className="rounded-full shadow-md"
                />
              </div>
            </div>
          </div>

          {/* Country Details */}
          <div className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-700">
              {t("country-details")}
            </h2>
            <div className="grid grid-cols-2 gap-4 text-gray-600">
              <p>
                <span className="font-semibold">{t("iso-alpha-2-code")}:</span>{" "}
                {country.isoAlpha2Code}
              </p>
              <p>
                <span className="font-semibold">{t("iso-alpha-3-code")}:</span>{" "}
                {country.isoAlpha3Code}
              </p>
              <p>
                <span className="font-semibold">{t("iso-numeric-code")}:</span>{" "}
                {country.isoNumericCode}
              </p>
              <p>
                <span className="font-semibold">{t("rank")}:</span>{" "}
                {country.rank}
              </p>
              <p>
                <span className="font-semibold">{t("currency")}:</span>{" "}
                {country.currency}
              </p>
              <p>
                <span className="font-semibold">{t("area")} (km²):</span>{" "}
                {country.areaKm2}
              </p>
              <p>
                <span className="font-semibold">{t("time-zone")}:</span>{" "}
                {country.timeZone}
              </p>
              <p>
                <span className="font-semibold">{t("calling-code")}:</span>{" "}
                {country.callingCode}
              </p>
              <p>
                <span className="font-semibold">{t("internet-tld")}:</span>{" "}
                {country.internetTLD}
              </p>
              <p>
                <span className="font-semibold">{t("government-type")}:</span>{" "}
                {country.governmentType}
              </p>
              <p>
                <span className="font-semibold">{t("independence-day")}:</span>{" "}
                {country.independenceDay}
              </p>
              <p>
                <span className="font-semibold">{t("driving-side")}:</span>{" "}
                {country.drivingSide}
              </p>
            </div>
          </div>

          {/* Tags */}
          <div className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-700">
              {t("tags")}
            </h2>
            <div className="flex flex-wrap gap-2">
              {country.tags.map((tag) => (
                <span
                  key={tag.id}
                  className="bg-teal-100 text-teal-700 px-2 py-1 rounded-full text-sm"
                >
                  {tag.name}
                </span>
              ))}
            </div>
          </div>

          {/* Additional Information */}
          <div className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-700">
              {t("additional-information")}
            </h2>
            <div className="grid grid-cols-2 gap-4 text-gray-600">
              <p>
                <span className="font-semibold">{t("capital-city")}:</span>{" "}
                {country.capitalCity}
              </p>
              <p>
                <span className="font-semibold">{t("continent")}:</span>{" "}
                {country.continent}
              </p>
              <p>
                <span className="font-semibold">{t("official-religion")}:</span>{" "}
                {country.officialReligion}
              </p>
              <p>
                <span className="font-semibold">{t("official-language")}:</span>{" "}
                {country.officialLanguage}
              </p>
              <p>
                <span className="font-semibold">{t("life-expectancy")}:</span>{" "}
                {country.lifeExpectancy}
              </p>
            </div>
          </div>

          {/* Overview and Content */}
          <div className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-700">
              {t("overview")}
            </h2>
            <p className="text-gray-600">{country.overview}</p>
          </div>

          <div className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-700">
              {t("introduction")}
            </h2>
            <p className="text-gray-600">{country.introduction}</p>
          </div>

          <div className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-700">
              {t("climate")}
            </h2>
            <p className="text-gray-600">{country.climate}</p>
          </div>

          {/* History and Culture */}
          <div className={styles.html}>
            <div
              className="text-gray-600"
              dangerouslySetInnerHTML={{ __html: country.history }}
            />
          </div>

          <div className={styles.html}>
            <div
              className="text-gray-600"
              dangerouslySetInnerHTML={{ __html: country.culture }}
            />
          </div>

          {/* Major Industries and Cities */}
          <div className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-700">
              {t("major-industries")}
            </h2>
            <div className="flex flex-wrap gap-2">
              {country.majorIndustries.map((name, i) => (
                <span
                  key={i}
                  className="bg-gray-200 text-gray-800 px-2 py-1 rounded-md text-sm"
                >
                  {name}
                </span>
              ))}
            </div>
          </div>

          <div className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-700">
              {t("major-cities")}
            </h2>
            <div className="space-y-4">
              {country.majorCities.map((city, i) => (
                <div key={i} className="bg-gray-100 p-4 rounded-lg shadow-sm">
                  <h4 className="text-xl font-semibold text-teal-700">
                    {city.name}
                  </h4>
                  <p className="text-gray-600">{city.description}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Fun and Weird Facts */}
          <div className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-700">
              {t("fun-facts")}
            </h2>
            <div className="space-y-4">
              {country.funFacts.map((f, i) => (
                <div key={i} className="bg-teal-50 p-4 rounded-lg shadow-sm">
                  <h4 className="text-xl font-semibold text-teal-700">
                    {f.heading}
                  </h4>
                  <p className="text-gray-600">{f.content}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-700">
              {t("weird-facts")}
            </h2>
            <div className="space-y-4">
              {country.weirdFacts.map((f, i) => (
                <div key={i} className="bg-pink-50 p-4 rounded-lg shadow-sm">
                  <h4 className="text-xl font-semibold text-pink-700">
                    {f.heading}
                  </h4>
                  <p className="text-gray-600">{f.content}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Current Affairs and Tourist Attractions */}
          <div className={styles.html}>
            <div
              className="text-gray-600"
              dangerouslySetInnerHTML={{ __html: country.currentAffairs }}
            />
          </div>

          <div className={styles.html}>
            <div
              className="text-gray-600"
              dangerouslySetInnerHTML={{ __html: country.touristAttractions }}
            />
          </div>
        </section>
        <div className="mt-16 mb-16"></div>
      </div>
    );
}
