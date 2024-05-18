"use client"
import { Button, Image, Link } from "@nextui-org/react";
import { useEffect, useState } from "react";
import { FaShoppingCart } from "react-icons/fa";
import { siteConfig } from "../app/site-config";

export default function PresentationVideo(){
  const [isMobile, setIsMobile] = useState(false);
  useEffect(() => {
    setIsMobile(
      /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
        navigator.userAgent
      )
    );
  }, []);

  return (
    <section className="h-screen bg-black top-[-4rem] relative">
      <div className="flex flex-wrap flex-col h-full w-full absolute content-center justify-center animate-fade-up z-20">
        <Image
          alt="Logo"
          src={siteConfig.images.principalLogo}
          className="rounded-none z-0 object-cover h-24 w-auto sm:h-24 sm:w-auto md:h-32 md:w-auto lg:h-40 lg:w-auto xl:h-48 xl:w-auto"
        />
        <Button
          href="/tienda"
          as={Link}
          className="mx-auto mt-8 z-20 py-6 px-4 sm:py-6 sm:px-4 md:py-6 md:px-6 lg:py-8 lg:px-8 xl:py-8 xl:px-8 shadow-md hover:shadow-lg bg-white text-black font-bold"
        >
          Ver Productos
          <FaShoppingCart />
        </Button>
      </div>
      <div className="top-0 relative h-screen w-full z-1 opacity-30">
        {isMobile ? (
          <Image
            className="w-full h-screen object-cover rounded-none opacity-30"
            src={siteConfig.images.homeVideoImage}
            alt="Fallback Image"
            loading="eager"
          />
        ) : (
          <video
            className="w-full h-screen object-cover absolute"
            disableRemotePlayback
            preload="metadata"
            controls={false}
            loop
            autoPlay
            muted
          >
            <source
              src={siteConfig.videos.homeVideo}
              type="video/mp4"
            ></source>
          </video>
        )}
      </div>
    </section>
  );
};
