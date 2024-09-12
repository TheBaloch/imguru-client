async function getCountry(slug, locale) {
  //console.log(`${process.env.NEXT_PUBLIC_API}/country/${slug}?lang=${locale}`);
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_API}/country/${slug}?lang=${locale}`,
    {
      cache: "no-cache",
      //next: { revalidate: 10000 },
    }
  );
  const t = await fetch("https://imguru.ae/api/country");
  console.log(t.status);
  if (!res.ok) {
    return null;
  }
  return res.json();
}

export default async function Page({ params: { locale, slug } }) {
  const country = await getCountry(slug, locale);
  //console.log(country);
  return (
    <>
      <h1>Hello {locale}</h1>
    </>
  );
}
