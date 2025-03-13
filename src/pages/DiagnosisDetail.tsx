import { Link, useParams } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import { getDiagnostico } from "../api";

const DiagnosisDetail: React.FC = () => {
  const { id, diagnosticoId } = useParams<{
    id: string;
    diagnosticoId: string;
  }>();

  const {
    data: diagnostico,
    isLoading,
    isError,
  } = useQuery({
    queryKey: ["diagnostico", id, diagnosticoId],
    queryFn: () => getDiagnostico(id as string, diagnosticoId as string),
    enabled: !!id && !!diagnosticoId,
  });

  return (
    <div className="container p-5">
      <Link to={`/autos/${id}/diagnostico`} className="text-info">
        ← Volver a generar un diagnóstico
      </Link>
      <h3 className="text-white my-4">Diagnóstico ID: {diagnosticoId}</h3>

      {isLoading && <span className="text-secondary">Cargando...</span>}

      {isError && (
        <span className="text-danger">Error al cargar el diagnóstico</span>
      )}

      {diagnostico && !isLoading && (
        <>
          <div className="text-white">
            <p className="m-0">
              <span className="text-info">Fecha:</span>{" "}
              {new Date(diagnostico?.createdAt).toLocaleString()}
            </p>
            <p className="m-0 my-2">
              <span className="text-info">Auto:</span> {diagnostico.auto.marca}{" "}
              {diagnostico.auto.modelo} - {diagnostico.auto.patente}
            </p>
            <p className="m-0">
              <span className="text-info">Síntomas:</span>{" "}
              {diagnostico?.sintomas}
            </p>

            <p className="m-0 text-info my-2">Posibles Causas:</p>
            <ul>
              <li>
                <strong className="text-success">Alta probabilidad:</strong>{" "}
                {diagnostico?.causas.probabilidadAlta}
              </li>
              <li>
                <strong className="text-warning">Media probabilidad:</strong>{" "}
                {diagnostico?.causas.probabilidadMedia}
              </li>
              <li>
                <strong className="text-danger">Baja probabilidad:</strong>{" "}
                {diagnostico?.causas.probabilidadBaja}
              </li>
            </ul>
          </div>
        </>
      )}
    </div>
  );
};

export default DiagnosisDetail;
