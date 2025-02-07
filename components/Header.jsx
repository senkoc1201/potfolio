import Image from "next/image";
import Link from "next/link";

import Socials from "../components/Socials";

const Header = () => {
  return (
    <header className="absolute z-30 w-full items-center px-16 xl-px-0 xl:h-[90px]">
      <div className="container mx-auto">
        <div className="flex flex-col lg:flex-row justify-between items-center gap-y-6 py-8">
          {/* logo */}
          <Link href="/" className="flex items-center gap-[20px]">
            <Image
              src="/logo.png"
              alt="logo"
              width={40}
              height={48}
              priority
            />
            <span className="text-cyan-300 text-[32px] font-bold font-sora" >John.ST</span>
          </Link>

          {/* socials */}
          <Socials />
        </div>
      </div>
    </header>
  );
};

export default Header;
