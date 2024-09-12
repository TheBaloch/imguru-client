import LanguageChanger from "@/components/Language/languageChanger";
import Image from "next/image";

export default function Header() {
  return (
    <header className="p-4 border-b shadow-xl">
      <div className="flex items-center justify-between ">
        <div className="flex items-center space-x-4">
          <div className="space-x-2">
            <Image
              src="/images/logo.png"
              alt="NattyNYC Logo"
              width="150"
              height="50"
            />
            <div>
              <p className="text-sm mx-0">نیٹی این وائی سی بلاگز</p>
            </div>
          </div>
        </div>
        <div className="flex items-center space-x-4">
          <div className="relative">
            <SearchIcon className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-muted-foreground" />
            <input
              type="text"
              placeholder="What are you looking for ?"
              className="pl-10 pr-4 py-2 border rounded-full w-64 bg-gray-100"
            />
          </div>
          <div>
            <p>Best Skincare & Cosmatics Blogs</p>
          </div>
          {/* <div className="flex items-center space-x-2">
            <GlobeIcon className="w-5 h-5" />
            <span className="text-sm">EN</span>
            <ChevronDownIcon className="w-5 h-5" />
          </div> */}
          {/* <div className="flex items-center space-x-2">
            <img
              src="/placeholder.svg"
              alt="Flag"
              className="w-5 h-5"
              width="20"
              height="20"
              style={{ aspectRatio: "20/20", objectFit: "cover" }}
            />
            <ChevronDownIcon className="w-5 h-5" />
          </div> */}
          {/* <div className="flex items-center space-x-2">
            <UserIcon className="w-5 h-5" />
            <span className="text-sm">Profile</span>
            <ChevronDownIcon className="w-5 h-5" />
          </div>
          <BellIcon className="w-5 h-5" />
          <ShoppingBagIcon className="w-5 h-5" /> */}
        </div>
      </div>
      <div className="flex justify-between items-center">
        <div>
          <nav className="flex space-x-4 mt-8">
            <a href="#" className="text-md font-medium">
              Categories
            </a>
            <a href="#" className="text-md font-medium">
              Brands
            </a>
          </nav>
        </div>
        <div>
          <LanguageChanger />
        </div>
      </div>
    </header>
  );
}

function BellIcon(props) {
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
      <path d="M6 8a6 6 0 0 1 12 0c0 7 3 9 3 9H3s3-2 3-9" />
      <path d="M10.3 21a1.94 1.94 0 0 0 3.4 0" />
    </svg>
  );
}

function ChevronDownIcon(props) {
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
      <path d="m6 9 6 6 6-6" />
    </svg>
  );
}

function GlobeIcon(props) {
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
      <circle cx="12" cy="12" r="10" />
      <path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20" />
      <path d="M2 12h20" />
    </svg>
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

function ShoppingBagIcon(props) {
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
      <path d="M6 2 3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4Z" />
      <path d="M3 6h18" />
      <path d="M16 10a4 4 0 0 1-8 0" />
    </svg>
  );
}

function UserIcon(props) {
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
      <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2" />
      <circle cx="12" cy="7" r="4" />
    </svg>
  );
}
