import { Link, useLocation } from "react-router-dom";

const Header: React.FC = () => {
  const location = useLocation();

  return (
    <header className="bg-primary text-white py-3">
      <div className="px-5 container d-flex align-items-center">
        <img src="/car.png" className="h-55px w-55px me-3" />
        <div>
          <h3 className="m-0 text-white">Diagnóstico Mecánico</h3>
          {location.pathname !== "/" ? (
            <Link to={"/"} className="p m-0 text-info">
              Inicio
            </Link>
          ) : (
            <p className="m-0 text-info">
              ¿Arranca o no arranca? Siempre arranca con bujias Hescher.
            </p>
          )}
        </div>
      </div>
    </header>
  );
};

export default Header;
