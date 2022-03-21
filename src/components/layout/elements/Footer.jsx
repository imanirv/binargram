import { HomeIcon, UploadIcon, UserIcon } from "@heroicons/react/outline";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className=" bg-black h-16 fixed bottom-0 left-0 w-full z-50">
      <div className="max-w-md mx-auto h-full border-t border-r border-l border-gray-600 flex justify-center items-center space-x-4">
        <Link href="/">
          <button type="button" className="inline-flex w-16 h-full justify-center items-center flex-col border-t-4 border-white text-white">
            <HomeIcon className="w-6 h-6" />
            <span className="text-sm">
              Home
            </span>
          </button>
        </Link>

        <Link href="/upload">
          <button type="button" className="inline-flex w-16 h-full justify-center items-center flex-col border-t-4 border-white text-white">
            <UploadIcon className="w-6 h-6" />
            <span className="text-sm">
              Upload
            </span>
          </button>
        </Link>

        <Link href="/account">
          <button type="button" className="inline-flex w-16 h-full justify-center items-center flex-col border-t-4 border-white text-white">
            <UserIcon className="w-6 h-6" />
            <span className="text-sm">
              Account
            </span>
          </button>
        </Link>


      </div>
    </footer>
  )
}

export default Footer;