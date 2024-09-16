"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { usePathname } from "next/navigation";
import { useTranslation } from "react-i18next";
import { ChevronDownIcon } from "@heroicons/react/solid";
import i18nConfig from "../../../i18nConfig";

export default function LanguageChanger() {
  const { i18n } = useTranslation();
  const currentLocale = i18n.language;
  const router = useRouter();
  const currentPathname = usePathname();
  const [languageDropdown, setLanguageDropdown] = useState(false);

  const languages = [
    { value: "en", name: "English", id: "en" },
    { value: "es", name: "Español", id: "es" },
    { value: "zh", name: "中文", id: "zh" },
    { value: "ar", name: "العربية", id: "ar" },
    { value: "fr", name: "Français", id: "fr" },
    { value: "de", name: "Deutsch", id: "de" },
    { value: "pt", name: "Portuguesa", id: "pt" },
    { value: "ja", name: "日本語", id: "ja" },
    { value: "ru", name: "Русский", id: "ru" },
    { value: "ko", name: "한국어", id: "ko" },
    { value: "hi", name: "हिन्दी", id: "hi" },
    { value: "it", name: "Italiano", id: "it" },
  ];

  const handleChange = (newLocale) => {
    const days = 30;
    const date = new Date();
    date.setTime(date.getTime() + days * 24 * 60 * 60 * 1000);
    const expires = date.toUTCString();
    document.cookie = `NEXT_LOCALE=${newLocale};expires=${expires};path=/`;

    if (
      currentLocale === i18nConfig.defaultLocale &&
      !i18nConfig.prefixDefault
    ) {
      router.push("/" + newLocale + currentPathname);
    } else {
      router.push(
        currentPathname.replace(`/${currentLocale}`, `/${newLocale}`)
      );
    }

    router.refresh();
  };

  return (
    <div className="relative">
      <button
        onClick={() => setLanguageDropdown(!languageDropdown)}
        className="bg-white text-gray-900 hover:text-gray-700 px-3 py-2 rounded-md text-sm font-medium flex items-center"
      >
        <svg
          className="mr-2 h-4 w-4"
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
        {languages.find((lang) => lang.value === currentLocale)?.name ||
          "Language"}
        <ChevronDownIcon className="ml-2 h-5 w-5" aria-hidden="true" />
      </button>
      {languageDropdown && (
        <div className="absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg ring-1 ring-black ring-opacity-5">
          <div className="py-1" role="menu">
            {languages.map((lang) => (
              <span
                key={lang.id}
                onClick={() => handleChange(lang.value)}
                className={`block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 ${
                  currentLocale === lang.value ? "font-bold" : ""
                }`}
                role="menuitem"
              >
                {lang.name}
              </span>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
