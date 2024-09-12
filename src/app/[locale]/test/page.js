import LanguageChanger from "@/components/Language/languageChanger";
import Image from "next/image";

export default function Navbar() {
  return (
    <nav className="bg-white shadow-md border-b">
      <div className="max-w-screen mx-auto p-2">
        <div className="flex justify-between">
          <div className="p-2">
            <Image width="120" height="60" src="/images/logo.png" alt="Logo" />
          </div>
          <div className="hidden sm:-my-px sm:ml-6 sm:flex sm:space-x-8">
            <a
              href="#"
              className="text-gray-900 hover:text-gray-700 inline-flex items-center px-1 pt-1 border-b-2 border-transparent hover:border-gray-600 text-md font-medium"
            >
              Skin Care
            </a>
            <a
              href="#"
              className="text-gray-900 hover:text-gray-700 inline-flex items-center px-1 pt-1 border-b-2 border-transparent hover:border-gray-600 text-md font-medium"
            >
              Hair Care
            </a>
            <a
              href="#"
              className="text-gray-900 hover:text-gray-700 inline-flex items-center px-1 pt-1 border-b-2 border-transparent hover:border-gray-600 text-md font-medium"
            >
              Fragrance
            </a>
            <a
              href="#"
              className="text-gray-900 hover:text-gray-700 inline-flex items-center px-1 pt-1 border-b-2 border-transparent hover:border-gray-600 text-md font-medium"
            >
              Supplements
            </a>
            <a
              href="#"
              className="text-gray-900 hover:text-gray-700 inline-flex items-center px-1 pt-1 border-b-2 border-transparent hover:border-gray-600 text-md font-medium"
            >
              Beauty
            </a>
          </div>
          <div className="p-2">
            <LanguageChanger />
          </div>
        </div>
      </div>
    </nav>
  );
}
