import Link from "next/link";

export default function ExploreAllCountries() {
  return (
    <>
      <section className="w-full py-12 md:py-24 lg:py-32">
        <div className="container px-4 md:px-6 mx-auto">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
                Explore All Countries
              </h2>
              <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                Dive deeper into the rich tapestry of nations. Discover unique
                cultures, histories, and landscapes from around the globe.
              </p>
            </div>
            <div className="w-full max-w-sm space-y-2">
              <Link
                href="/countries"
                className="w-full inline-block text-center px-6 py-3 text-lg font-medium bg-blue-600 text-white rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
              >
                View All Countries
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
