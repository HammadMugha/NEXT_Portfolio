import Image from "next/image";
import React from "react";

function Footer() {
  return (
    <section className="bg-[#192132]">
      <div className="container mx-auto max-w-6xl py-[30px]">
        <div className="Flex">
          <div className="logo">
            <Image src="/logo-light.png" alt="logo" width={100} height={80} />
          </div>
          <p className="text-white">© 2024 Dennis. Design & Develop with : by Shreethemes.</p>
        </div>
      </div>
    </section>
  );
}

export default Footer;
