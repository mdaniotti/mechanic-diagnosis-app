import { Link } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import { getAutos } from "../api";

const AutoList: React.FC = () => {
  const {
    data: autos = [],
    isLoading,
    isError,
  } = useQuery({
    queryKey: ["autos"],
    queryFn: getAutos,
    staleTime: 60000,
  });

  if (isError)
    return (
      <p className="text-danger">
        Error al obtener la lista de autos, intente nuevamente en unos minutos!
      </p>
    );

  return (
    <div>
      <h4 className="text-white mb-3">Listado de Autos</h4>

      {isLoading ? (
        <p className="text-secondary">Cargando lista de autos...</p>
      ) : autos.length === 0 ? (
        <p className="text-secondary">
          No hay autos registrados, debes agregar un nuevo auto.
        </p>
      ) : (
        <ul className="list-group">
          {autos.map((auto) => (
            <li
              key={auto._id}
              className="list-group-item d-flex justify-content-between align-items-center"
            >
              <h6>
                <span className="text-info w-auto">[{auto.patente}]</span>{" "}
                {auto.marca} {auto.modelo}
              </h6>
              <Link
                to={`/autos/${auto._id}`}
                className="btn btn-sm bg-primary text-white"
              >
                Ver Detalles
              </Link>
            </li>
          ))}
        </ul>
      )}

      {/* TODO: Implementra la paginación de la lista de autos */}
    </div>
  );
};

export default AutoList;
