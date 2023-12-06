import Image from "next/image";
import NavThemeChangev2 from "@/components/jp/NavThemeChangev2";
import Language from "@/components/jp/Language";
import Link from "next/link";

export default function Nav() {
  return (
    <nav className=" dark:bg-bgcolor2 bg-[#fcf3f1]  duration-300  p-5 flex items-center justify-evenly z-10 border-b-4 dark:border-bgcolor2 border-main shadow-xl ">
      <div className="flex gap-[60px]">
        <Link href="/jp">
          <Image
            className="logo-dark"
            src="/logo/christophersaffronlogo.svg"
            alt=""
            priority
            height={60}
            width={166}
          />
          <Image
            className="logo-light"
            src="/logo/christophersaffronlogolight.svg"
            alt=""
            priority
            height={60}
            width={166}
          />
        </Link>
        <ul className="flex items-center gap-7 text-xl">
          <Link href="/jp/work/web-development" className=" link">
            Work
          </Link>
          <Link
            href="/"
            className=" link rounded-md cursor-pointer bg-main px-6 py-4 dark:text-black hover:text-white font-bold"
          >
            Blog
          </Link>
          <Link href="/jp/resume" className="link">
            Resume
          </Link>
        </ul>
      </div>
      <div className=" w-fit flex items-center gap-5">
        <NavThemeChangev2 />
        {/* border-[#414141] */}
        <div className="border h-[30px] border-main" />
        <Language />
      </div>
    </nav>
  );
}