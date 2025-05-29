const Link = ({
  href,
  className,
  children,
}: {
  href: string;
  className?: string;
  children: React.ReactNode;
}) => {
  const isMail = href.startsWith("mailto:");
  return (
    <a
      href={href}
      className={className}
      target={isMail ? undefined : "_self"}
      rel={isMail ? undefined : "noopener noreferrer"}
    >
      {children}
    </a>
  );
};

const Navigation = () => {
  return (
    <div className="grid md:grid-cols-2 gap-x-12 lg:mt-3.5 xl:flex">
      <section>
        <h2 className="text-lg text-UDR font-bold">¿Necesitas ayuda?</h2>
        <nav className="mt-8">
          <ul className="flex flex-col gap-y-6 text-sm font-normal">
            <li>
              <Link
                href="mailto:union@udr.com.co"
                className="text-foreground text-sm"
              >
                union@udr.com.co
              </Link>
            </li>
            <li>
              <span className="text-foreground text-sm">+57 1 234 5678</span>
            </li>
            <li>
              <span className="text-foreground text-sm">
                Calle 123 #45-67, Bogotá, Colombia
              </span>
            </li>
          </ul>
        </nav>
      </section>
      <section>
        <h2 className="text-lg text-UDR font-bold">Instrucciones</h2>
        <nav className="mt-8">
          <ul className="flex flex-col gap-y-6 text-sm font-normal">
            <li>
              <Link href="/" className="text-foreground text-sm">
                Disney
              </Link>
            </li>
            <li>
              <Link href="/" className="text-foreground text-sm">
                Universal
              </Link>
            </li>
            <li>
              <Link href="/" className="text-foreground text-sm">
                Avis Budget
              </Link>
            </li>
            <li>
              <Link href="/" className="text-foreground text-sm">
                Terrawind
              </Link>
            </li>
          </ul>
        </nav>
      </section>
      <section>
        <h2 className="text-lg text-UDR font-bold">Información</h2>
        <nav className="mt-8">
          <ul className="flex flex-col gap-y-6 text-sm font-normal">
            <li>
              <Link href="/" className="text-foreground text-sm">
                Aviso legal
              </Link>
            </li>
            <li>
              <Link href="/" className="text-foreground text-sm">
                Política de privacidad
              </Link>
            </li>
            <li>
              <Link href="/" className="text-foreground text-sm">
                Términos y condiciones
              </Link>
            </li>
            <li>
              <Link href="/" className="text-foreground text-sm">
                Mis transacciones
              </Link>
            </li>
          </ul>
        </nav>
      </section>
      <section>
        <h2 className="text-lg text-UDR font-bold">Sobre nosotros</h2>
        <nav className="mt-8">
          <ul className="flex flex-col gap-y-6 text-sm font-normal">
            <li>
              <Link href="/" className="text-foreground text-sm">
                Quiénes somos
              </Link>
            </li>
            <li>
              <Link href="/" className="text-foreground text-sm">
                NIT: 123456789-0
              </Link>
            </li>
            <li>
              <Link href="/" className="text-foreground text-sm">
                Registro Nacional de Turismo: 12345
              </Link>
            </li>
          </ul>
        </nav>
      </section>
    </div>
  );
};

export default Navigation;
