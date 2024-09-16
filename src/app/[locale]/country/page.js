import CountryCard from "@/components/UI/Country/countryCard";
import initTranslations from "@/app/i18n";
import Pagination from "@/components/UI/Country/pagination";
import Link from "next/link";

async function getCountry(limit, locale, p) {
  const res = await fetch(
    `${
      process.env.NEXT_PUBLIC_API
    }/country?limit=${limit}&lang=${locale}&page=${p || 1}`,
    {
      cache: "force-cache",
      //next: { revalidate: 3600 },
    }
  );
  if (!res.ok) {
    return {
      data: null,
      pagination: null,
    };
  }
  return res.json();
}

export default async function Page({
  params: { locale },
  searchParams: { p },
}) {
  const { data, pagination } = await getCountry(10, locale, p);
  const { t } = await initTranslations(locale, ["common"]);
  if (data)
    return (
      <>
        <nav aria-label="breadcrumb" className="p-6">
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
              <span className="font-medium text-gray-900" aria-current="page">
                Countries
              </span>
            </li>
          </ol>
        </nav>
        <section className="w-full py-12 md:py-12 lg:py-12">
          <div className="grid gap-8 px-4 md:px-6">
            <div className="space-y-2 text-center">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl mb-10">
                All Countries
              </h2>
            </div>
            <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-2">
              {data?.map((country, key) => (
                <CountryCard country={country} key={key} />
              ))}
            </div>
          </div>
          <div>
            <Pagination
              totalPages={pagination?.totalPages}
              page={pagination?.page}
            />
          </div>
        </section>
      </>
    );
}

function formatDate(dateString) {
  const date = new Date(dateString);
  return `${date.toLocaleString("default", {
    month: "long",
  })} ${date.getDate()}, ${date.getFullYear()}`;
}
