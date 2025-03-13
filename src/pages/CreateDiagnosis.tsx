import { useForm } from "react-hook-form";
import { useParams, useNavigate, Link } from "react-router-dom";
import { Diagnostico, DiagnosticoFormData } from "../types";
import { createDiagnostico } from "../api";
import { useMutation } from "@tanstack/react-query";
import { useState } from "react";

const MIN_STRING_LENGTH = 20;
const MAX_STRING_LENGTH = 500;

const CreateDiagnosis: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const [diagnosticoId, setDiagnosticoId] = useState<string | null>(null);
  const navigate = useNavigate();

  const {
    getValues,
    register,
    handleSubmit,
    reset,
    formState: { errors, isValid },
  } = useForm<DiagnosticoFormData>({
    mode: "onChange",
    defaultValues: {
      autoId: id,
      sintomas: "",
    },
  });

  const mutation = useMutation({
    mutationFn: createDiagnostico,
    onSuccess: (data: Diagnostico) => {
      console.log("Diagnóstico creado:", data); // Reemplazar por pop-ups
      setDiagnosticoId(data._id);
      reset();
      // navigate(`/autos/${id}/diagnostico`);
    },
    onError: (error: Error) => {
      console.error("Error al crear el diagnóstico:", error);
    },
  });

  const onSubmit = (data: DiagnosticoFormData) => {
    mutation.mutate(data);
  };

  return (
    <div className="container p-5">
      <Link to={`/autos/${id}`} className="text-info">
        ← Volver al detalle
      </Link>

      <h3 className="text-white my-4">Nuevo Diagnóstico para Auto [ID] {id}</h3>

      {/* Formulario */}
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="col">
          <textarea
            className="form-control"
            style={{ minHeight: 120 }}
            placeholder="Describe los síntomas"
            maxLength={MAX_STRING_LENGTH}
            {...register("sintomas", {
              required: "Los síntomas son obligatorios",
              minLength: {
                value: MIN_STRING_LENGTH,
                message: `Los sintomas deben contener al menos ${MIN_STRING_LENGTH} caracteres`,
              },
              maxLength: {
                value: MAX_STRING_LENGTH,
                message: "Los síntomas no pueden superar los 500 caracteres",
              },
            })}
          ></textarea>
          <small className="text-secondary mt-2">
            Max. {MAX_STRING_LENGTH} caracteres
          </small>
        </div>

        {errors.sintomas && (
          <p
            className={`${
              getValues("sintomas").length ? "text-warning" : "text-danger"
            } m-0 mt-1`}
          >
            {errors.sintomas.message}
          </p>
        )}

        <button
          type="submit"
          className="btn btn-primary mt-4"
          disabled={!isValid || mutation.isPending}
        >
          {mutation.isPending ? "Generando..." : "Generar Diagnóstico"}
        </button>

        {mutation.isError && (
          <p className="text-danger mt-2">
            Ha ocurrido un error, intente nuevamente!
          </p>
        )}

        {diagnosticoId && (
          <div className="mt-4">
            <p className="text-success">Diagnóstico generado exitosamente.</p>
            <button
              className="btn btn-success"
              onClick={() =>
                navigate(`/autos/${id}/diagnosticos/${diagnosticoId}`)
              }
            >
              Ver Diagnóstico
            </button>
          </div>
        )}
      </form>
    </div>
  );
};

export default CreateDiagnosis;
