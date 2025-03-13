import { useForm } from "react-hook-form";
import { AutoFormData } from "../types";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { createAuto } from "../api";

const AutoForm: React.FC = () => {
  const queryClient = useQueryClient();

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isValid },
  } = useForm<AutoFormData>({
    mode: "onChange",
    defaultValues: { marca: "", modelo: "", color: "", patente: "" },
  });

  // Mutación para agregar un auto
  const mutation = useMutation({
    mutationFn: createAuto,
    onSuccess: () => {
      // Añadir un pop-ups successfully
      queryClient.invalidateQueries({ queryKey: ["autos"] });
      reset();
    },
    onError: (error) => {
      console.error("Error al agregar auto:", error);
    },
  });

  const onSubmit = (data: AutoFormData) => {
    mutation.mutate(data);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="mb-5">
      <h4 className="text-white mb-3">Agregar un nuevo auto</h4>
      <div className="d-flex gap-4 mb-4">
        {/* Input Marca */}
        <div className="w-100">
          <label className="pb-1 m-0 text-secondary">
            Marca del auto <span className="text-danger">*</span>
          </label>
          <input
            type="text"
            className="form-control border-0"
            placeholder="Marca"
            {...register("marca", { required: "La marca es obligatoria" })}
          />
          {errors.marca && (
            <p className="m-0 text-danger p-1">{errors.marca.message}</p>
          )}
        </div>

        {/* Input Modelo */}
        <div className="w-100">
          <label className="pb-1 m-0 text-secondary">
            Modelo del auto <span className="text-danger">*</span>
          </label>
          <input
            type="text"
            className="form-control border-0"
            placeholder="Modelo"
            {...register("modelo", { required: "El modelo es obligatorio" })}
          />
          {errors.modelo && (
            <p className="m-0 text-danger p-1">{errors.modelo.message}</p>
          )}
        </div>

        {/* Input Color */}
        <div className="w-100">
          <label className="pb-1 m-0 text-secondary">
            Color del auto <span className="text-danger">*</span>
          </label>
          <input
            type="text"
            className="form-control border-0"
            placeholder="Color"
            {...register("color", {
              required: "El color es obligatorio",
              pattern: {
                value: /^[A-Za-zÁÉÍÓÚáéíóúñÑ\s]+$/,
                message: "Solo letras y espacios permitidos",
              },
            })}
          />
          {errors.color && (
            <p className="m-0 text-danger p-1">{errors.color.message}</p>
          )}
        </div>

        {/* Input Patente */}
        <div className="w-100">
          <label className="pb-1 m-0 text-secondary">
            Patente del auto <span className="text-danger">*</span>
          </label>
          <input
            type="text"
            className="form-control border-0"
            placeholder="Patente"
            {...register("patente", { required: "La patente es obligatoria" })}
          />
          {errors.patente && (
            <p className="m-0 text-danger p-1">{errors.patente.message}</p>
          )}
        </div>
      </div>

      {/* Submit */}
      <button
        type="submit"
        className="btn btn-primary"
        disabled={!isValid || mutation.status === "pending"}
      >
        {mutation.status === "pending" ? "Agregando..." : "Agregar Auto"}
      </button>

      {mutation.isError && (
        <p className="text-danger mt-2">Error: {mutation.error?.message}</p>
      )}
    </form>
  );
};

export default AutoForm;
