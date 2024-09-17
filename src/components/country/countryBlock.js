import Image from "next/image";
import { MapPin, Sun } from "lucide-react";
import Link from "next/link";

async function getCountries(locale, limit, page) {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_API}/country?limit=${limit || 10}&lang=${
      locale || "en"
    }&page=${page || 1}`,
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

export default async function CountryBlock({ locale, limit, page }) {
  const { data } = await getCountries(locale, limit, page);
  if (data) {
    return (
      <>
        <section className="w-full py-12 md:py-24 lg:py-32 bg-gray-100">
          <div className="container px-4 md:px-6 mx-auto">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-center mb-12">
              Featured Countries
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6">
              {data?.map((country) => (
                <div
                  key={country.id}
                  className="bg-white rounded-lg shadow-md overflow-hidden"
                >
                  <Image
                    src={country.mainImage}
                    alt={`Landscape of ${country.name}`}
                    width={400}
                    height={200}
                    className="w-full h-48 object-cover"
                  />
                  <div className="p-4">
                    <div className="relative">
                      <Image
                        src={country.flagImage}
                        alt={`Flag of ${country.name}`}
                        width={30}
                        height={20}
                        className="absolute top-0 right-0 rounded"
                      />
                      <h3 className="text-xl font-semibold mb-2">
                        {country.name}
                      </h3>
                    </div>
                    <div className="flex items-center space-x-2 text-gray-500 ">
                      <MapPin className="h-4 w-4" />
                      <span>{country.capitalCity}</span>
                    </div>
                    <div className="flex items-center space-x-2 text-gray-500  mt-2">
                      <Sun className="h-4 w-4" />
                      <span>{country.climate}</span>
                    </div>
                  </div>
                  <div className="p-4 border-t border-gray-200 ">
                    <Link
                      href={`/country/${country.slug}`}
                      className="w-full inline-block text-center px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
                    >
                      Learn More
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </>
    );
  }
}
