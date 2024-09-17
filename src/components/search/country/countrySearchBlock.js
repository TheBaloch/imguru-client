import { Search } from "lucide-react";

export default function CountrySearchBlock() {
  return (
    <>
      <section className="w-full py-12 md:py-24 lg:py-32 xl:py-48 bg-[url('https://images.imguru.ae/images/Japan-main-2654603.webp')] bg-cover bg-center">
        <div className="container px-4 md:px-6 mx-auto">
          <div className="flex flex-col items-center space-y-4 text-center">
            <div className="space-y-2">
              <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none text-white shadow-text">
                Explore the World&apos;s Nations
              </h1>
              <p className="mx-auto max-w-[700px] text-white md:text-xl shadow-text">
                Discover the rich tapestry of cultures, histories, and
                landscapes that make each country unique.
              </p>
            </div>
            <div className="w-full max-w-sm space-y-2">
              <form className="flex space-x-2">
                <input
                  className="w-full px-3 py-2 text-sm rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="Search for a country"
                  type="text"
                />
                <button
                  type="submit"
                  className="px-4 py-2 text-sm font-medium text-white bg-blue-600 rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
                >
                  <Search className="h-4 w-4" />
                  <span className="sr-only">Search</span>
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
