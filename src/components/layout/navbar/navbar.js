"use client";
import initTranslations from "@/app/i18n";
import LanguageChanger from "@/components/Language/languageChanger";
import LanguageSwitcher from "@/components/Language/languageSwitcher";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

export default function Navbar({ locale }) {
  //const { t } = await initTranslations(locale, ["common"]);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <header className="relative">
      <div className="absolute inset-0 bg-gradient-to-r from-blue-900 to-blue-700 opacity-50" />
      <nav className="relative bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex-shrink-0 flex items-center">
              <span className="text-2xl font-bold text-blue-800">
                <Link href="/">
                  imguru<span className="text-gray-700">.ae</span>
                </Link>
              </span>
            </div>
            <div className="hidden md:ml-6 md:flex md:space-x-8">
              <Link
                href="/country"
                className="border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700 inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium"
              >
                All Countries
              </Link>
            </div>

            <div className="hidden md:flex">
              <LanguageChanger />
            </div>

            <div className="md:hidden flex items-center">
              <button
                onClick={toggleMenu}
                className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500"
              >
                <span className="sr-only">Open main menu</span>
                {isMenuOpen ? (
                  <svg
                    className="h-6 w-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                ) : (
                  <svg
                    className="h-6 w-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M4 6h16M4 12h16M4 18h16"
                    />
                  </svg>
                )}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile menu */}
        {isMenuOpen && (
          <div className="md:hidden">
            <div className="pt-2 pb-3 space-y-1">
              <Link
                href="#"
                className="block pl-3 pr-4 py-2 border-l-4 text-base font-medium border-transparent text-gray-500 hover:bg-gray-50 hover:border-gray-300 hover:text-gray-700"
              >
                Passport index
              </Link>
              <Link
                href="#"
                className="block pl-3 pr-4 py-2 border-l-4 text-base font-medium border-transparent text-gray-500 hover:bg-gray-50 hover:border-gray-300 hover:text-gray-700"
              >
                Visa free countries
              </Link>
              <Link
                href="#"
                className="block pl-3 pr-4 py-2 border-l-4 text-base font-medium border-transparent text-gray-500 hover:bg-gray-50 hover:border-gray-300 hover:text-gray-700"
              >
                Visa
              </Link>
              <Link
                href="#"
                className="block pl-3 pr-4 py-2 border-l-4 text-base font-medium border-transparent text-gray-500 hover:bg-gray-50 hover:border-gray-300 hover:text-gray-700"
              >
                Immigration visa
              </Link>
              <Link
                href="#"
                className="block pl-3 pr-4 py-2 border-l-4 text-base font-medium border-transparent text-gray-500 hover:bg-gray-50 hover:border-gray-300 hover:text-gray-700"
              >
                eTA
              </Link>
              <Link
                href="#"
                className="block pl-3 pr-4 py-2 border-l-4 text-base font-medium border-transparent text-gray-500 hover:bg-gray-50 hover:border-gray-300 hover:text-gray-700"
              >
                Golden Visa
              </Link>
            </div>
            <div className="pt-4 pb-3 border-t border-gray-200 flex justify-items-end grid">
              <LanguageChanger />
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}
