import PassportCard from "../UI/Passport/passportCard";

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

export default async function PassportBlock({ locale, limit, page }) {
  const { data } = await getCountries(locale, limit, page);
  if (data) {
    return (
      <>
        <section className="w-full py-12 md:py-24 lg:py-32 bg-gray-100">
          <div className="container px-4 md:px-6 mx-auto">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-center mb-12">
              Featured Passports
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6">
              {data?.map((country, key) => (
                <PassportCard country={country} key={key} />
              ))}
            </div>
          </div>
        </section>
      </>
    );
  }
}
