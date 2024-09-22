import Link from "next/link";
import Image from "next/image";

export default function PassportCard({ country }) {
  return (
    <Link
      href={`/passport/${country?.slug}`}
      prefetch={false}
      key={country.id}
      className="block transform transition duration-300 hover:scale-105"
    >
      <div className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300 border border-gray-200 w-86">
        <div className="relative">
          <Image
            src={country.passportImage}
            alt={`${country.name} Passport`}
            width={300}
            height={200}
            className="w-full h-80 object-cover"
          />
          <div className="absolute top-3 right-3 bg-blue-500 text-white rounded-full w-14 h-14 flex items-center justify-center font-bold text-lg shadow-md">
            #{country.rank}
          </div>
        </div>
        <div className="p-5">
          <div className="flex justify-between items-center mb-3">
            <h2 className="text-2xl font-bold text-gray-800 truncate max-w-[70%]">
              {country.name}
            </h2>
            <Image
              src={country.flagImage}
              alt={`${country.name} Flag`}
              width={48}
              height={48}
              className="rounded-full border-2 border-gray-200 shadow-sm"
            />
          </div>
          <div className="flex justify-between text-sm text-gray-600 mt-2">
            <span className="flex items-center">
              <svg
                className="w-4 h-4 mr-1 text-gray-400"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
              {country.continent}
            </span>
            <span className="flex items-center">
              <svg
                className="w-4 h-4 mr-1 text-gray-400"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                />
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                />
              </svg>
              {country.capitalCity}
            </span>
          </div>
        </div>
      </div>
    </Link>
  );
}
