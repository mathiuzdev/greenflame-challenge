import { useState } from "react";

export const SuscribeForm = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [accepted, setAccepted] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState("");

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!name.trim() || !email.trim() || !accepted) {
      setError("Por favor completa todos los campos y acepta los términos.");
      setSubmitted(false);
      return;
    }
    setError("");
    setSubmitted(true);
  }

  return (
    <form onSubmit={handleSubmit} className="w-full">
      <div className="flex flex-col gap-6 lg:flex-row">
        <div className="flex flex-col  gap-3.5 w-1/2">
          <label htmlFor="name" className="text-sm text-white font-normal">
            Nombre
          </label>
          <input
            name="name"
            id="name"
            type="text"
            className=" w-full h-11 rounded-lg border bg-gray-100 p-3.5 text-black focus:outline-none focus:ring-2 focus:ring-UDR"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>

        <div className="flex flex-col  gap-3.5 w-1/2">
          <label htmlFor="email" className="text-sm text-white font-normal">
            Dirección de e-mail
          </label>
          <input
            name="email"
            id="email"
            type="email"
            className=" w-full h-11 rounded-lg border bg-gray-100 p-3.5 text-black focus:outline-none focus:ring-2 focus:ring-UDR"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div></div>
        <button
          className="bg-UDR h-11 flex mt-auto cursor-pointer rounded-lg px-10 py-3 text-base font-bold text-white transition hover:opacity-90 active:opacity-80 "
          type="submit"
        >
          ¡Suscribete!
        </button>
      </div>

      <div className="mt-6 flex items-center gap-4">
        <input
          type="checkbox"
          id="terms"
          checked={accepted}
          onChange={(e) => setAccepted(e.target.checked)}
          className="accent-white w-4 h-4"
        />
        <label
          htmlFor="terms"
          className="text-primary-500 block text-xs cursor-pointer"
        >
          Acepto registrarme en la base de datos de Unión de Representaciones
          para recibir información y promociones en esta dirección de correo
          electrónico.
        </label>
      </div>

      {error && <div className="mt-4 text-xs text-red-500">{error}</div>}
      {submitted && !error && (
        <div className="mt-4 text-xs text-green-500">
          ¡Gracias por suscribirte!
        </div>
      )}
    </form>
  );
};
