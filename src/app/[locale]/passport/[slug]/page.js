import Image from "next/image";
import {
  Globe2,
  Flag,
  Clock,
  Phone,
  Building2,
  MapPin,
  Languages,
} from "lucide-react";
import initTranslations from "@/app/i18n";
import Link from "next/link";

async function getPassport(slug, locale) {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_API}/passport/${slug}?lang=${locale}`,
    {
      cache: "force-cache",
    }
  );
  if (!res.ok) {
    return null;
  }
  return res.json();
}

export async function generateMetadata({ params: { slug, locale } }) {
  const data = await getPassport(slug, locale);
  return {
    metadataBase: new URL("https://imguru.ae"),
    title: `${data?.name} - Passport`,
    description: data?.overview,
    openGraph: {
      title: `${data?.name} - Passport`,
      description: data?.overview,
      url: `/${locale}/passport/${slug}`,
      siteName: "Imguru",
      images: [
        {
          url: data?.passportImage,
          width: 200,
          height: 400,
        },
      ],
      locale: locale,
      type: "article",
    },
    icons: {
      icon: "/favicon.ico",
      apple: "/favicon.ico",
    },
    alternates: {
      canonical: `/${locale}/passport/${slug}`,
      languages: {
        en: `https://imguru.ae/en/passport/${slug}`,
        es: `https://imguru.ae/es/passport/${slug}`,
        zh: `https://imguru.ae/zh/passport/${slug}`,
        ar: `https://imguru.ae/ar/passport/${slug}`,
        fr: `https://imguru.ae/fr/passport/${slug}`,
        de: `https://imguru.ae/de/passport/${slug}`,
        pt: `https://imguru.ae/pt/passport/${slug}`,
        ja: `https://imguru.ae/ja/passport/${slug}`,
        ru: `https://imguru.ae/ru/passport/${slug}`,
        ko: `https://imguru.ae/ko/passport/${slug}`,
        hi: `https://imguru.ae/hi/passport/${slug}`,
        it: `https://imguru.ae/it/passport/${slug}`,
      },
    },
    robots: {
      index: true,
      follow: true,
    },
  };
}
export default async function Page({ params: { slug, locale } }) {
  const data = await getPassport(slug, locale);
  const { t } = await initTranslations(locale, ["common"]);
  if (data)
    return (
      <div className="bg-gradient-to-b from-blue-50 to-white min-h-screen">
        <nav aria-label="breadcrumb" className="p-4">
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
                href="/passport"
                className="hover:text-gray-900 hover:underline"
              >
                Passports
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
              <span className="text-gray-900">{data.name}</span>
            </li>
          </ol>
        </nav>
        <div className="container mx-auto px-4 py-8">
          <header className="text-center mb-12">
            <h1 className="text-4xl font-bold text-blue-800 mb-2">
              {data.name} Passport
            </h1>
            <p className="text-xl text-blue-600">
              Global Rank: <span className="font-semibold">{data.rank}</span>
            </p>
          </header>

          <div className="mb-12 flex justify-center">
            <div className="bg-white rounded-xl shadow-lg overflow-hidden mr-8">
              <Image
                src={data.passportImage}
                alt={`${data.name} Passport`}
                width={400}
                height={200}
                loading="eager"
              />
              <div className="p-6">
                <h2 className="text-2xl font-semibold text-gray-800 mb-2">
                  Passport
                </h2>
                <p className="text-gray-600">{data.name} Passport Image</p>
              </div>
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-6 mb-12">
            <InfoCard
              icon={<Globe2 className="h-6 w-6 text-blue-500" />}
              title="ISO Code"
              value={`${data.isoAlpha3Code} / ${data.isoNumericCode}`}
            />
            <InfoCard
              icon={<Flag className="h-6 w-6 text-green-500" />}
              title="Currency"
              value={data.currency}
            />
            <InfoCard
              icon={<Clock className="h-6 w-6 text-purple-500" />}
              title="Time Zone"
              value={data.timeZone}
            />
            <InfoCard
              icon={<Phone className="h-6 w-6 text-red-500" />}
              title="Calling Code"
              value={data.callingCode}
            />
            <InfoCard
              icon={<Building2 className="h-6 w-6 text-yellow-500" />}
              title="Government"
              value={data.governmentType}
            />
            <InfoCard
              icon={<MapPin className="h-6 w-6 text-indigo-500" />}
              title="Capital"
              value={data.capitalCity}
            />
            <InfoCard
              icon={<Globe2 className="h-6 w-6 text-teal-500" />}
              title="Continent"
              value={data.continent}
            />
            <InfoCard
              icon={<Languages className="h-6 w-6 text-pink-500" />}
              title="Languages"
              value={data.officialLanguage}
            />
            <InfoCard
              icon={<Flag className="h-6 w-6 text-orange-500" />}
              title="Independence"
              value={data.independenceDay}
            />
          </div>
          <div className="bg-white rounded-xl shadow-lg p-6">
            <StyledContent html={data.mainContent} />
            <StyledContent html={data.secondContent} />
            <StyledContent html={data.thirdContent} />
          </div>

          <div className="bg-white rounded-xl shadow-lg p-6">
            <h2 className="text-2xl font-semibold text-gray-800 mb-6">
              Visa Requirements
            </h2>
            <div className="space-y-8">
              <VisaSection
                title="Visa Free Access"
                countries={data.visaFreeAccess}
              />
              <VisaSection
                title="Visa on Arrival"
                countries={data.visaOnArrival}
              />
              <VisaSection title="eTA" countries={data.eTA} />
              <VisaSection title="Visa Online" countries={data.visaOnline} />
              <VisaSection
                title="Visa Required"
                countries={data.visaRequired}
              />
            </div>
          </div>
        </div>
      </div>
    );
}

function InfoCard({ icon, title, value }) {
  return (
    <div className="bg-white p-6 rounded-xl shadow-md">
      <div className="flex items-center mb-4">
        {icon}
        <h3 className="ml-3 text-lg font-medium text-gray-800">{title}</h3>
      </div>
      <p className="text-xl font-semibold text-gray-700">{value}</p>
    </div>
  );
}

function VisaSection({ title, countries }) {
  return (
    <div>
      <h3 className="text-xl font-semibold text-gray-800 mb-4">{title}</h3>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
        {countries?.map((country) => (
          <Link
            key={country.name}
            className="flex flex-col items-center p-2 bg-gray-50 rounded-lg shadow-sm"
            href={country.slug}
          >
            <Image
              src={country.flagImage}
              alt={`${country.name} flag`}
              width={60}
              height={40}
              className="rounded mb-2"
            />
            <span className="text-sm text-center text-gray-700">
              {country.name}
            </span>
          </Link>
        ))}
      </div>
    </div>
  );
}

const StyledContent = ({ html }) => {
  if (!html) return <></>;
  return (
    <div
      dangerouslySetInnerHTML={{ __html: html }}
      className="prose max-w-none
        [&_h1]:text-3xl [&_h1]:font-bold [&_h1]:mb-4 [&_h1]:text-gray-900
        [&_h2]:text-2xl [&_h2]:font-semibold [&_h2]:mb-3 [&_h2]:text-gray-800
        [&_h3]:text-xl [&_h3]:font-medium [&_h3]:mb-2 [&_h3]:text-gray-700
        [&_p]:text-base [&_p]:leading-relaxed [&_p]:mb-4 [&_p]:text-gray-600
        [&_ul]:list-disc [&_ul]:pl-5 [&_ul]:mb-4
        [&_ol]:list-decimal [&_ol]:pl-5 [&_ol]:mb-4
        [&_li]:mb-2
        [&_a]:text-blue-600 [&_a]:underline [&_a]:hover:text-blue-800
        [&_blockquote]:border-l-4 [&_blockquote]:border-gray-300 [&_blockquote]:pl-4 [&_blockquote]:italic [&_blockquote]:my-4
        [&_code]:bg-gray-100 [&_code]:rounded [&_code]:px-1 [&_code]:py-0.5 [&_code]:text-sm
        [&_pre]:bg-gray-100 [&_pre]:p-4 [&_pre]:rounded [&_pre]:overflow-x-auto
        [&_img]:max-w-full [&_img]:h-auto [&_img]:rounded [&_img]:my-4
        [&_table]:w-full [&_table]:border-collapse [&_table]:my-4
        [&_th]:bg-gray-100 [&_th]:border [&_th]:border-gray-300 [&_th]:px-4 [&_th]:py-2 [&_th]:text-left
        [&_td]:border [&_td]:border-gray-300 [&_td]:px-4 [&_td]:py-2
        [&_hr]:my-8 [&_hr]:border-t [&_hr]:border-gray-300"
    />
  );
};
