import { Image } from "@nextui-org/image";
import { getMenu } from 'lib/shopify';
import Link from 'next/link';
import { FaTwitter } from "react-icons/fa";
import { FiInstagram } from "react-icons/fi";
import { siteConfig } from "../../app/site-config";

const { COMPANY_NAME, SITE_NAME } = process.env;

export default async function Footer() {
  const currentYear = new Date().getFullYear();
  const copyrightDate = 2023 + (currentYear > 2023 ? `-${currentYear}` : '');
  const skeleton = 'w-full h-6 animate-pulse rounded bg-neutral-200 dark:bg-neutral-700';
  const menu = await getMenu('next-js-frontend-footer-menu');
  const copyrightName = COMPANY_NAME || SITE_NAME || '';

  return (
    <footer className="text-sm text-neutral-500 dark:text-neutral-400">
      {/* Contenido del footer */}
      <div className="container mx-auto py-8 px-4">
          {/* Sección del contenido personalizado */}
          <div className="col-span-2 flex flex-col items-center justify-center">
            <div className="w-4/5 md:w-8/12">
              <div className="flex flex-col gap-2 items-center lg:flex-row lg:justify-evenly lg:items-start w-full">
                <div className="flex flex-col items-center lg:items-start gap-2">
                  <p className="text-slate-400 text-xl">Métodos de Pago</p>
                  <div className="flex items-center justify-center gap-4">
                    <Image
                      src={siteConfig.images.paymentMethods}
                      alt="Método de Pago"
                      width={320}
                      height={320}
                    />
                  </div>
                </div>
                <div className="flex flex-col items-center lg:items-start gap-2">
                  <p className="text-slate-400 text-xl text-center w-max">
                    ¿Tienes alguna pregunta o comentario?
                  </p>
                  <p className="flex items-center gap-4 justify-start text-slate-200">
                    {siteConfig.contact.gmail}
                  </p>
                  <p className="flex items-center gap-4 justify-start text-slate-200">
                    Envíos a todo Argentina garantizados.
                  </p>
                </div>
              </div>
            </div>
            <Image
              src={siteConfig.images.principalLogo}
              alt="Logo"
              className="rounded-none scale-150 py-8"
              width={225}
              height={255}
            />
            <div className="flex items-center gap-4 mt-4">
              <Link isExternal href={siteConfig.links.twitter}>
                <FaTwitter className="w-8 h-8 text-white" />
              </Link>
              <Link isExternal href={siteConfig.links.instagram}>
                <FiInstagram className="w-6 h-8 text-white" />
              </Link>
            </div>
            <div>
              <Link
                isExternal
                href={siteConfig.links.webcodebuilders}
                className="flex items-center gap-1 text-current"
              >
                <span className="text-zinc-200">Powered by</span>
                <p className="text-primary">WebCodeBuilders</p>
              </Link>
            </div>
          </div>
      </div>
      {/* Pie de página */}
      <div className="bg-gray-200 dark:bg-gray-800 py-4 text-center">
        <p className="text-sm text-gray-600 dark:text-gray-400">
          &copy; {copyrightDate} {copyrightName}
        </p>
      </div>
    </footer>
  );
}
