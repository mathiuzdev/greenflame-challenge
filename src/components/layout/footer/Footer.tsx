import Newsletter from "./Newsletter";
import SocialLinks from "./SocialLinks";
import Navigation from "./Navigation";

const Footer = () => {
  return (
    <footer className="mt-auto">
      <Newsletter />
      <div className="bg-white px-[313px]">
        <div className="container mx-auto">
          <section className="lg:flex justify-between gap-x-17.5 py-12">
            <div className="max-w-72 mb-10 lg:mb-0">
              <img
                src="/imgs/icons_logos/logo-udr.svg"
                width={288}
                height={41}
                alt="UDR Logo"
              />
              <SocialLinks />
            </div>
            <Navigation />
          </section>
          <section className="flex flex-wrap gap-x-6 gap-y-8 items-center lg:justify-between border-y border-gray-300 py-9">
            <img
              src="/imgs/company_logos/anato-logo.png"
              alt="Anato"
              width={116}
              height={29}
            />
            <img
              src="/imgs/company_logos/camara-colombiana-comercio-logo.png"
              alt="Cámara Colombiana de Comercio Electrónico"
              width={164}
              height={30}
            />
            <img
              src="/imgs/company_logos/superintendencia-logo.png"
              alt="Superintendencia de Industria y Comercio"
              width={171}
              height={30}
            />
            <img
              src="/imgs/company_logos/super-transporte-logo.png"
              alt="SuperTransporte"
              width={127}
              height={48}
            />
            <img
              src="/imgs/company_logos/aeronautica-logo.png"
              alt="Aeronáutica Civil Unidad Administrativa Especial"
              width={186}
              height={32}
            />
            <img
              src="/imgs/icons_logos/iata-logo.svg"
              alt="IATA"
              width={61}
              height={38}
            />
          </section>
          <section className="flex items-center justify-between py-6">
            <p className="text-sm">
              © {new Date().getFullYear()} - Copyright Unión de Representaciones
              S.A.S. Todos los derechos reservados.
            </p>
            <img
              src="/imgs/icons_logos/greenFlame-logo.svg"
              alt="Green Flame Logo"
              width={122}
              height={29}
            />
          </section>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
