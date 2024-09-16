import initTranslations from "@/app/i18n";
import Image from "next/image";
import Link from "next/link";
import { Phone, Mail, MapPin } from "lucide-react";

export default async function Footer({ locale }) {
  const { t } = await initTranslations(locale, ["common"]);
  return (
    <footer className="bg-[#0a0a3d] text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Logo and Contact Info */}
          <div className="space-y-4">
            <Image
              src="/logo.png"
              alt="Immigration Guru"
              width={200}
              height={50}
              className="mb-4"
            />
            <div className="flex items-center space-x-2">
              <Phone size={20} />
              <span>+971 54 202 5084</span>
            </div>
            <div className="flex items-center space-x-2">
              <Mail size={20} />
              <span>hi@imguru.ae</span>
            </div>
            <div className="flex items-start space-x-2">
              <MapPin size={20} className="flex-shrink-0 mt-1" />
              <span>
                Suite 2023 Business Tower, Business Bay, Dubai, United Arab
                Emirates
              </span>
            </div>
            <div className="flex space-x-4 mt-4">
              {/* Uncomment social icons when needed */}
              {/* <Link href="#" className="bg-[#1a1a4d] p-2 rounded-full">
                <Facebook size={20} />
              </Link>
              <Link href="#" className="bg-[#1a1a4d] p-2 rounded-full">
                <Instagram size={20} />
              </Link>
              <Link href="#" className="bg-[#1a1a4d] p-2 rounded-full">
                <Youtube size={20} />
              </Link> */}
            </div>
          </div>

          {/* Information */}
          <div className="md:col-span-1">
            <h3 className="text-xl font-semibold mb-4">Information</h3>
            <div className="w-12 h-1 bg-orange-500 mb-4"></div>
            <ul className="space-y-2">
              <li>
                <Link href="#">About Us</Link>
              </li>
              <li>
                <Link href="#">Contact Us</Link>
              </li>
            </ul>
          </div>

          {/* Top Links */}
          <div className="md:col-span-1">
            <h3 className="text-xl font-semibold mb-4">Top Links</h3>
            <div className="w-12 h-1 bg-orange-500 mb-4"></div>
            <ul className="space-y-2">
              <li>
                <Link href="#">Jobs</Link>
              </li>
              <li>
                <Link href="#">Testimonials</Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Newsletter Subscription */}
        <div className="mt-12">
          <h3 className="text-2xl font-semibold mb-4">Subscribe Newsletter</h3>
          <div className="flex flex-col sm:flex-row">
            <input
              type="email"
              placeholder="E-Mail Type . . ."
              className="flex-grow bg-white text-black rounded-t-full sm:rounded-l-full sm:rounded-t-none px-4 py-2 focus:outline-none"
            />
            <button className="bg-orange-500 text-white rounded-b-full sm:rounded-r-full sm:rounded-b-none px-6 py-2 font-semibold mt-2 sm:mt-0">
              SUBSCRIBE
            </button>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-12 text-center text-sm opacity-70">
          Copyright © ImGuru | All Right Reserved
        </div>
      </div>
    </footer>
  );
}
