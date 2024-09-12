import initTranslations from "@/app/i18n";
import LanguageChanger from "@/components/Language/languageChanger";
import Image from "next/image";
import Link from "next/link";

export default async function Navbar({ locale }) {
  const { t } = await initTranslations(locale, ["common"]);

  return (
    <nav className="bg-white shadow-md border-b">
      <div className="max-w-screen mx-auto p-2">
        <div className="flex justify-between">
          <div className="p-2">
            <Link href="/">
              <Image
                width="140"
                height="60"
                src="/images/logo.png"
                alt="Logo"
              />
            </Link>
          </div>

          <div className="font-medium text-lg hidden sm:-my-px sm:ml-6 sm:hidden md:hidden lg:flex sm:space-x-8 font-mono">
            <Link
              href="/skincare"
              className="text-gray-700 hover:text-gray-600 inline-flex items-center px-1 pt-1 border-b-2 border-transparent hover:border-gray-600"
            >
              {t("skincare")}
            </Link>
            <Link
              href="haircare"
              className="text-gray-700 hover:text-gray-600 inline-flex items-center px-1 pt-1 border-b-2 border-transparent hover:border-gray-600"
            >
              {t("haircare")}
            </Link>
            <Link
              href="/fragrance"
              className="text-gray-700 hover:text-gray-600 inline-flex items-center px-1 pt-1 border-b-2 border-transparent hover:border-gray-600"
            >
              {t("fragrance")}
            </Link>
            <Link
              href="/supplements"
              className="text-gray-700 hover:text-gray-600 inline-flex items-center px-1 pt-1 border-b-2 border-transparent hover:border-gray-600"
            >
              {t("supplements")}
            </Link>
            <Link
              href="/beauty"
              className="text-gray-700 hover:text-gray-600 inline-flex items-center px-1 pt-1 border-b-2 border-transparent hover:border-gray-600"
            >
              {t("beauty")}
            </Link>
          </div>

          <div className="p-2">
            {/* <div className="relative">
              <SearchIcon className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-muted-foreground" />
              <input
                type="text"
                placeholder="What are you looking for ?"
                className="pl-10 pr-4 py-2 border rounded-full w-64 bg-gray-100"
              />
            </div> */}
            <LanguageChanger />
          </div>
        </div>
      </div>
    </nav>
  );
}

function MenuIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <line x1="4" x2="20" y1="12" y2="12" />
      <line x1="4" x2="20" y1="6" y2="6" />
      <line x1="4" x2="20" y1="18" y2="18" />
    </svg>
  );
}

function SearchIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <circle cx="11" cy="11" r="8" />
      <path d="m21 21-4.3-4.3" />
    </svg>
  );
}
