import MailBox from "@/components/MailBox";
import Link from "next/link";
import { AiFillInstagram, AiFillTikTok } from "react-icons/ai";

const Footer = () => {
  return (
    <div className="text-white max-w-[1536px] grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-8 w-full py-14 px-8">
      {/* Useful links */}
      <div>
        <h2 className="text-2xl font-semibold mb-4">Useful Links</h2>
        <ul className="space-y-2">
          <li>
            <Link className="text-lg hover:text-gray-400 transition" href={"/"}>
              Shop
            </Link>
          </li>
          <li>
            <Link className="text-lg hover:text-gray-400 transition" href={"/"}>
              Contact Us
            </Link>
          </li>
          <li>
            <Link className="text-lg hover:text-gray-400 transition" href={"/"}>
              Shipping and Refunds
            </Link>
          </li>
          <li>
            <Link className="text-lg hover:text-gray-400 transition" href={"/"}>
              Privacy and Shop Policies
            </Link>
          </li>
        </ul>
      </div>

      {/* Socials */}
      <div>
        <h2 className="text-2xl font-semibold mb-4">
          Join our Social Networks
        </h2>
        <div className="flex space-x-4">
          <Link href={""} className="hover:text-gray-400 transition" title="Instagram">
            <AiFillInstagram size={30} />
          </Link>
          <Link href={"/"} className="hover:text-gray-400 transition" title="Tiktok">
            <AiFillTikTok size={30} />
          </Link>
        </div>
      </div>

      {/* Newsletter */}
      <div>
        <h2 className="text-2xl font-semibold mb-4">
          Subscribe to our Newsletter
        </h2>
        <p className="mb-4 text-gray-300">
          Sign up for our newsletter by entering your email address to be
          notified of future releases and announcements related to our store.
        </p>
        <div className="text-black">
          <MailBox />
        </div>
      </div>
    </div>
  );
};

export default Footer;
