"use client";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import routes from "@/src/helper/routes";
const Footer = () => {
  const pathname = usePathname();

  return (
    <>
      <div className="w-full  relative">
        {/* Pattern Background - similar to Hero */}
        <div className="bg-gradient-to-t from-[#CDEEFF] via-[#CDEEFF] to-[#DFDFDF]/0 absolute bottom-0 left-0 w-full h-[150%]" />

        <Image
          src="/images/hero/pattern.png"
          width={0}
          height={0}
          fill
          className="object-cover  md:hidden"
          alt="Footer pattern"
          unoptimized
        />
        <Image
          src="/images/hero/pattern.png"
          width={0}
          height={0}
          className="hidden absolute bottom-0 w-full md:block md:h-auto"
          alt="Footer pattern"
          unoptimized
        />
        <div>
          <div className="section-width pt-12 pb-16 relative z-10">
            <div className="flex flex-col lg:flex-row gap-12 lg:gap-0 justify-between">
              {/* Left side - Logo */}
              <div className="basis-2/5">
                <div className="max-w-64 ml-[-20px] pl-8 sm:flex sm:justify-start sm:items-center">
                  <Image
                    src={"/images/layout/logo-black.png"}
                    className="xl:h-16 md:h-8 h-6 w-auto"
                    width={150}
                    height={100}
                    alt="Kernel logo"
                  />
                </div>
              </div>

              {/* Right side - Navigation links */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-12 lg:gap-16 xl:gap-20">
                {/* Quick Links */}
                <div>
                  <h3 className="mb-6 text-black text-lg font-semibold">
                    Quick Links
                  </h3>
                  <div className="space-y-4 text-black">
                    <p className="text-base font-normal  leading-6">
                      <Link
                        href={routes.home}
                        className="hover:text-gray-600 transition-colors"
                      >
                        Home
                      </Link>
                    </p>
                    <p className="text-base font-normal  leading-6">
                      <Link
                        href={routes.home + "#whykernel"}
                        className="hover:text-gray-600 transition-colors"
                      >
                        Why Kernel
                      </Link>
                    </p>
                    <p className="text-base font-normal  leading-6">
                      <Link
                        href={routes.home + "#corebenefits"}
                        className="hover:text-gray-600 transition-colors"
                      >
                        Core Benefits
                      </Link>
                    </p>
                    <p className="text-base font-normal  leading-6">
                      <Link
                        href={routes.home + "#whatyouget"}
                        className="hover:text-gray-600 transition-colors"
                      >
                        What You Get
                      </Link>
                    </p>
                    <p className="text-base font-normal  leading-6">
                      <Link
                        href={routes.home + "#whoithelps"}
                        className="hover:text-gray-600 transition-colors"
                      >
                        Who It Helps
                      </Link>
                    </p>
                  </div>
                </div>

                {/* Resources */}
                <div>
                  <h3 className="mb-6 text-black text-lg font-semibold">
                    Resources
                  </h3>
                  <div className="space-y-4 text-black">
                    {/* <p className="text-base font-normal  leading-6">
                    <Link
                      href="#"
                      className="hover:text-gray-600 transition-colors"
                    >
                      About Us
                    </Link>
                  </p>
                  <p className="text-base font-normal leading-6">
                    <Link
                      href="#"
                      className="hover:text-gray-600 transition-colors"
                    >
                      Insights
                    </Link>
                  </p>
                  <p className="text-base font-normalleading-6">
                    <Link
                      href="#"
                      className="hover:text-gray-600 transition-colors"
                    >
                      FAQs
                    </Link>
                  </p> */}
                    <p className="text-base font-normal  leading-6">
                      <Link
                        href={routes.privacy}
                        className="hover:text-gray-600 transition-colors"
                      >
                        Privacy Policy
                      </Link>
                    </p>
                    <p className="text-base font-normal  leading-6">
                      <Link
                        href={routes.terms}
                        className="hover:text-gray-600 transition-colors"
                      >
                        Terms & Conditions
                      </Link>
                    </p>
                  </div>
                </div>

                {/* Social Links */}
                <div>
                  <h3 className="mb-6 text-black text-lg font-semibold">
                    Social Links
                  </h3>
                  <div className="space-y-4 text-black">
                    <p className="text-base font-normal  leading-6">
                      <a
                        href="https://www.linkedin.com/company/ken42/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hover:text-gray-600 transition-colors"
                      >
                        LinkedIn Us
                      </a>
                    </p>
                    <p className="text-base font-normal leading-6">
                      <a
                        href="https://www.instagram.com/ken42_/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hover:text-gray-600 transition-colors"
                      >
                        Instagram{" "}
                      </a>
                    </p>
                    <p className="text-base font-normal leading-6">
                      <a
                        href="https://www.facebook.com/ken42edtech"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hover:text-gray-600 transition-colors"
                      >
                        Facebook
                      </a>
                    </p>
                    {/* <p className="text-base font-normal leading-6">
                    <a
                      href="#"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:text-gray-600 transition-colors"
                    >
                      YouTube
                    </a>
                  </p> */}
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Bottom copyright section */}
          <div className="section-width border-t border-[#ffffff10] pt-8 pb-8 relative z-10">
            <div className="text-center">
              <p className="text-[#3F3F3F] font-bold text-base">
                2025, Kernel &nbsp;&nbsp;&nbsp;&nbsp; All Rights Reserved
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
