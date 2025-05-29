import ChevronRightIcon from "@mui/icons-material/ChevronRight";

export const Header = () => {
  return (
    <header className="w-full shadow-sm bg-white">
      <div className="justify-between max-w-screen h-[88px] px-[313px] py-6 flex items-center gap-2 mx-auto text-sm border-b border-gray-50 ">
        <div className="flex items-center gap-4 min-w-[320px]">
          <img src="/imgs/icons_logos/logo-udr.svg" alt="Logo" />
        </div>

        <div className="flex items-center gap-x-[45px] [&>a]:gap-x-2.5 [&>a]:p-2.5 font-bold [&>a]:text-sm  flex-1 justify-end">
          <a href="#" className=" ">
            Buscar transacción
          </a>
          <a href="#" className=" ">
            Políticas
          </a>
          <a href="#" className=" ">
            Contáctenos
          </a>

          <div className="flex items-center gap-[24px]">
            <div className="flex items-center  gap-3 bg-gray-100 rounded-lg p-3 cursor-pointer select-none">
              <div className="flex items-center gap-9">
                <img
                  src="/imgs/icons_logos/spa-flag.svg"
                  alt="Español"
                  className="w-5 h-5"
                />
                <span className="font-bold ">Español</span>
              </div>
              <img
                src="/imgs/icons_logos/chevron-icon.svg"
                alt="Chevron"
                className="rotate-90"
              />
            </div>

            <div className="flex items-center gap-3 bg-gray-100  rounded-lg py-3 pr-3 pl-4">
              <span className=" font-bold">Hola, Javier</span>
              <div className="w-5 h-5 rounded-full bg-UDR text-white flex items-center justify-center  text-xs">
                J
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="min-w-full justify-between h-[80px]  px-[312px] py-6 flex items-center font-medium text-sm">
        <div className="flex py-1.5 gap-9 bg-gray-100 rounded-lg  items-center ">
          <p className="py-2.5 px-6  ">Miami International Airport (MIA)</p>
          <ChevronRightIcon fontSize="small" className="text-blue-400" />
          <p className="py-2.5 px-6 ">Orlando International Airport (MCO)</p>
        </div>
        <div className="flex py-1.5  bg-gray-100 rounded-lg items-center justify-center min-w-[450px]">
          <p className="py-2.5 px-6 ">20 septiembre 2025, 12:00</p>
          <ChevronRightIcon fontSize="small" className="text-blue-400" />

          <p className=" py-2.5 px-6 ">30 septiembre 2025, 18:00</p>
        </div>
        <button className="bg-UDR  flex gap-5  text-white py-4 px-12 rounded-lg">
          Modificar
        </button>
      </div>

      <div className="w-full flex py-2.5 px-[312px] justify-center items-center bg-primary-800 text-white text-sm  lg:px-20  gap-6 h-[68px]">
        <div className="flex gap-9 py-1.5">
          <div className="flex items-center font-bold text-primary-50 py-2.5 px-6">
            Selecciona tu vehículo
          </div>
          <p className="flex items-center p-2.5">
            <ChevronRightIcon fontSize="small" className="text-primary-500" />
          </p>

          <div className="flex items-center text-primary-500 py-2.5 px-6">
            Agrega equipamiento adicional
          </div>
          <p className="flex items-center text-primary-500 p-2.5">
            <ChevronRightIcon fontSize="small" className="text-primary-500" />
          </p>

          <div className="flex items-center text-primary-500 py-2.5 px-6">
            Información del conductor
          </div>
          <p className="flex items-center  p-2.5">
            <ChevronRightIcon fontSize="small" className="text-primary-500" />
          </p>

          <div className="flex items-center text-primary-500 py-2.5 px-6">
            Confirmación de la reserva
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
