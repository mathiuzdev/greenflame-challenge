import { SuscribeForm } from "./SuscribeForm";

export const Newsletter = () => {
  return (
    <section className="bg-primary-800 py-16 ">
      <div className="  flex max-w-[1273px] min-w-[1273px]  mx-auto justify-between gap-x-14 ">
        <div className="flex flex-col w-[398px]">
          <h2 className="text-lg font-bold text-white">
            ¿Quieres estar al tanto de nuestras novedades?
          </h2>
          <p className="mt-8 text-sm text-white">
            Suscríbete a nuestro newsletter y mantente al día con nuestras
            novedades, lanzamientos de productos y ofertas exclusivas.
          </p>
        </div>
        <SuscribeForm />
      </div>
    </section>
  );
};

export default Newsletter;
