"use client";
import Image from "next/image";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="relative z-10 overflow-hidden bg-white dark:bg-[#000000] pt-[60px] md:pt-[80px] xl:pt-[100px] 2xl:pt-[120px]">
      <div className="container">
        <div className="grid grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-3 justify-center">
          {/* Coluna 1 - Logo e Social */}
          <div className="px-4 mx-auto">
            <div className="max-w-[360px]">
              <Link href="/" className="mb-6 inline-block">
                <Image
                  src="/images/logo/logoImazon.png"
                  alt="logo"
                  className="w-full dark:hidden"
                  width={120}
                  height={50}
                />
                <Image
                  src="/images/logo/logoImazon.png"
                  alt="logo"
                  className="hidden w-full dark:block"
                  width={120}
                  height={50}
                />
              </Link>
              <p className="mb-2 text-base text-body-color dark:text-body-color-dark">
                Requisição de Formulários
              </p>
              <p className="mb-6 text-base text-body-color dark:text-body-color-dark">
                Instituto do Homem e Meio Ambiente da Amazônia.
              </p>
              <div className="flex items-center space-x-4">
                {[...Array(4)].map((_, i) => (
                  <a
                    key={i}
                    href="/"
                    aria-label="social-link"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-body-color duration-300 hover:text-[#027B3F] dark:text-body-color-dark dark:hover:text-[#027B3F]"
                    >
                    <svg
                      width="18"
                      height="18"
                      viewBox="0 0 22 22"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M12.1 10.4939V7.42705C12.1 6.23984 13.085 5.27741 14.3 5.27741H16.5V2.05296L13.5135 1.84452C10.9664 1.66676 8.8 3.63781 8.8 6.13287V10.4939H5.5V13.7183H8.8V20.1667H12.1V13.7183H15.4L16.5 10.4939H12.1Z"
                        fill="currentColor"
                      />
                    </svg>
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Coluna 2 - Links Úteis */}
          <div className="px-4 mx-auto">
            <div>
              <h2 className="mb-6 text-xl font-bold text-black dark:text-white">Links Úteis</h2>
              <ul>
                <li>
                  <Link
                    href="/blog"
                    className="mb-3 inline-block text-base text-body-color duration-300 hover:text-[#027B3F] dark:text-body-color-dark dark:hover:text-[#027B3F]"                  >
                    Blog
                  </Link>
                </li>
                <li>
                  <Link
                    href="/"
                    className="mb-3 inline-block text-base text-body-color duration-300 hover:hover:text-[#027B3F] dark:text-body-color-dark dark:hover:text-[#027B3F]"
                  >
                    Pricing
                  </Link>g
                </li>
                <li>
                  <Link
                    href="/about"
                    className="mb-3 inline-block text-base text-body-color duration-300 hover:hover:text-[#027B3F] dark:text-body-color-dark dark:hover:text-[#027B3F]"
                  >
                    About
                  </Link>
                </li>
              </ul>
            </div>
          </div>

          {/* Coluna 3 - Suporte */}
          <div className="px-4 mx-auto">
            <div>
              <h2 className="mb-6 text-xl font-bold text-black dark:text-white">Suporte e Ajuda</h2>
              <ul>
                <li>
                  <Link
                    href="/contact"
                    className="mb-3 inline-block text-base text-body-color duration-300 hover:hover:text-[#027B3F] dark:text-body-color-dark dark:hover:text-[#027B3F]"
                  >
                    Open Support Ticket
                  </Link>
                </li>
                <li>
                  <Link
                    href="/"
                    className="mb-3 inline-block text-base text-body-color duration-300 hover:hover:text-[#027B3F] dark:text-body-color-dark dark:hover:text-[#027B3F]"
                  >
                    Terms of Use
                  </Link>
                </li>
                <li>
                  <Link
                    href="/about"
                    className="mb-3 inline-block text-base text-body-color duration-300 hover:hover:text-[#027B3F] dark:text-body-color-dark dark:hover:text-[#027B3F]"
                  >
                    About
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
