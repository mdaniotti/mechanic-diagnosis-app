import { useParams, Link } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import { getAuto } from "../api";

const AutoDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>();

  const {
    data: auto,
    isLoading,
    isError,
  } = useQuery({
    queryKey: ["auto", id],
    queryFn: () => getAuto(id as string, "" as string),
    enabled: !!id, // Evita la consulta si no hay auto ID
  });

  return (
    <div className="container p-5">
      <Link to="/" className="text-info p">
        ← Volver
      </Link>

      <h3 className="text-white my-4">Detalles del Auto - ID {id}</h3>

      {isLoading && <p className="text-secondary">Cargando información...</p>}

      {isError && <p className="text-danger">Error al cargar el auto</p>}

      {auto && !isLoading && (
        <>
          <h5 className="text-white">
            <span className="text-info">Marca: </span> {auto.marca}
          </h5>
          <h5 className="text-white">
            <span className="text-info">Modelo: </span> {auto.modelo}
          </h5>
          <h5 className="text-white">
            <span className="text-info">Color: </span> {auto.color}
          </h5>
          <h5 className="text-white">
            <span className="text-info">Patente: </span> {auto.patente}
          </h5>

          <Link
            to={`/autos/${auto._id}/diagnostico`}
            className="btn btn-primary mt-4"
          >
            Generar Diagnóstico
          </Link>
        </>
      )}

      {/* TODO: Mostrar la lista de diagnósticos del auto */}
    </div>
  );
};

export default AutoDetail;
