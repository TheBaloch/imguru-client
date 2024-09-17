import Image from "next/image";
import Link from "next/link";
import { Globe, Search, MapPin, Sun } from "lucide-react";
import CountrySearchBlock from "@/components/search/country/countrySearchBlock";
import ExploreAllCountries from "@/components/country/exploreAllCountry";
import CountryBlock from "@/components/country/countryBlock";

const featuredCountries = [
  {
    id: 168,
    slug: "switzerland",
    name: "Switzerland",
    capitalCity: "Bern",
    climate: "Temperate climate with four distinct seasons.",
    mainImage: "https://images.imguru.ae/images/Switzerland-main-9600614.webp",
    flagImage: "https://images.imguru.ae/images/Switzerland-flag-9601515.webp",
  },
  {
    id: 100,
    slug: "liechtenstein",
    name: "Liechtenstein",
    capitalCity: "Vaduz",
    climate:
      "Temperate continental climate with cold winters and warm summers.",
    mainImage:
      "https://images.imguru.ae/images/Liechtenstein-main-3676787.webp",
    flagImage:
      "https://images.imguru.ae/images/Liechtenstein-flag-3680452.webp",
  },
  {
    id: 167,
    slug: "sweden",
    name: "Sweden",
    capitalCity: "Stockholm",
    climate:
      "Temperate climate with variations across regions; influenced by the Gulf Stream.",
    mainImage: "https://images.imguru.ae/images/Sweden-main-9535544.webp",
    flagImage: "https://images.imguru.ae/images/Sweden-flag-9537794.webp",
  },
];

export default function HomePage() {
  return (
    <div className="flex flex-col min-h-screen">
      <main className="flex-1">
        <CountrySearchBlock />
        <CountryBlock />
        <ExploreAllCountries />
      </main>
    </div>
  );
}
