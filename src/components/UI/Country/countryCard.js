import Link from "next/link";
import Image from "next/image";

export default function CountryCard({ country }) {
  return (
    <Link
      href={`/country/${country?.slug}`}
      className="group shadow-lg rounded-lg p-10 hover:bg-gray-50 transition-colors duration-300"
      prefetch={false}
      key={country.id}
    >
      {/* Top Image Section */}
      <div id="top" className="overflow-hidden rounded-lg">
        <Image
          src={country?.mainImage}
          alt={country?.title}
          width={600}
          height={400}
          className="h-80 w-full object-cover transition-transform duration-300 group-hover:scale-105"
          style={{ aspectRatio: "600/400", objectFit: "cover" }}
          unoptimized
          priority
        />
      </div>

      {/* Middle Section (Country Info) */}
      <div id="mid" className="mt-4 text-center">
        {/* Flag */}
        <div className="flex justify-center mb-2">
          <Image
            src={country?.flagImage}
            alt={`${country?.name} flag`}
            width={40}
            height={30}
            className="object-cover rounded-sm shadow-sm"
          />
        </div>

        {/* Country Name */}
        <h2 className="text-xl font-semibold text-gray-800 group-hover:text-teal-600 transition-colors">
          {country?.name}
        </h2>

        {/* Continent */}
        <p className="text-sm text-gray-500">{country?.continent}</p>

        {/* Capital City */}
        <p className="text-sm text-gray-500">Capital: {country?.capitalCity}</p>
      </div>

      {/* Bottom Section (Overview & Call to Action) */}

      <div id="bot" className="mt-4 text-center">
        <p className="text-gray-600 text-sm mb-3 line-clamp-5">
          {country?.title}
        </p>
        <p className="text-gray-600 text-sm mb-3 line-clamp-5">
          {country?.overview}
        </p>

        {/* CTA */}
        <div className="mt-3">
          <span className="text-teal-500 font-medium transition-colors duration-300 hover:text-teal-600">
            Learn more →
          </span>
        </div>
      </div>
    </Link>
  );
}
