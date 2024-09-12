import initTranslations from "@/app/i18n";
import Link from "next/link";

export default async function Footer({ locale }) {
  const { t } = await initTranslations(locale, ["common"]);
  return (
    <footer className="bg-gray-900 text-white py-8">
      <div className="container mx-auto px-4 md:px-0 grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* <div className="space-y-4">
          <h4 className="text-lg font-bold">Services</h4>
          <ul className="space-y-2">
            <li>
              <Link href="#" className="hover:text-gray-400" prefetch={false}>
                Web Design
              </Link>
            </li>
            <li>
              <Link href="#" className="hover:text-gray-400" prefetch={false}>
                Web Development
              </Link>
            </li>
            <li>
              <Link href="#" className="hover:text-gray-400" prefetch={false}>
                Digital Marketing
              </Link>
            </li>
            <li>
              <Link href="#" className="hover:text-gray-400" prefetch={false}>
                Branding
              </Link>
            </li>
          </ul>
        </div> */}
        <div className="space-y-4">
          <h3 className="text-lg font-bold">{t("categories")}</h3>
          <ul className="space-y-2 font-mono">
            <li>
              <Link
                href="/skincare"
                className="hover:text-gray-400"
                prefetch={false}
              >
                {t("skincare")}
              </Link>
            </li>
            <li>
              <Link
                href="/haircare"
                className="hover:text-gray-400"
                prefetch={false}
              >
                {t("haircare")}
              </Link>
            </li>
            <li>
              <Link
                href="/fragrance"
                className="hover:text-gray-400"
                prefetch={false}
              >
                {t("fragrance")}
              </Link>
            </li>
            <li>
              <Link
                href="/supplements"
                className="hover:text-gray-400"
                prefetch={false}
              >
                {t("supplements")}
              </Link>
            </li>
            <li>
              <Link
                href="/beauty"
                className="hover:text-gray-400"
                prefetch={false}
              >
                {t("beauty")}
              </Link>
            </li>
          </ul>
        </div>
        <div className="space-y-4">
          <div className="flex space-x-4">
            <h3 className="text-lg font-bold">{t("resources")}</h3>
          </div>
          <div className="flex space-x-4">
            <Link
              href="/about"
              className="hover:text-gray-400 mt-4 font-mono"
              prefetch={false}
            >
              {t("about")}
            </Link>
          </div>

          <div className="flex space-x-4">
            <Link
              href="/contact"
              className="hover:text-gray-400 mt-4 font-mono"
              prefetch={false}
            >
              {t("contact")}
            </Link>
          </div>
        </div>
        <div className="space-y-4">
          <h3 className="text-lg font-bold">{t("about")}</h3>
          <p className="text-sm font-mono">{t("about_line")}</p>
        </div>
      </div>

      <div className="container mx-auto px-4 md:px-0 mt-8 text-center text-gray-400">
        &copy; 2024 NattyNYC {t("blogs")}. {t("all_rights_reserved")}
      </div>
    </footer>
  );
}

function LinkedinIcon(props) {
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
      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
      <rect width="4" height="12" x="2" y="9" />
      <circle cx="4" cy="4" r="2" />
    </svg>
  );
}

function MailIcon(props) {
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
      <rect width="20" height="16" x="2" y="4" rx="2" />
      <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
    </svg>
  );
}

function PhoneIcon(props) {
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
      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
    </svg>
  );
}

function TwitterIcon(props) {
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
      <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z" />
    </svg>
  );
}
