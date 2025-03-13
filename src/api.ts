import axios from "axios";
import { AutoFormData, Auto, DiagnosticoFormData, Diagnostico } from "./types";

const API_URL = import.meta.env.VITE_API_URL;

/**
 * Obtiene la lista de autos registrados en el sistema.
 *
 * @returns {Promise<Auto[]>} - Lista de autos disponibles.
 */
export const getAutos = async (): Promise<Auto[]> => {
  const { data } = await axios.get<Auto[]>(`${API_URL}/api/autos`);
  return data;
};

/**
 * Registra un nuevo auto en el sistema.
 *
 * @param {AutoFormData} auto - Datos del auto a registrar.
 * @returns {Promise<Auto>} - Auto creado con los datos registrados.
 */
export const createAuto = async (auto: AutoFormData): Promise<Auto> => {
  const { data } = await axios.post(`${API_URL}/api/autos`, auto);
  return data;
};

/**
 * Obtiene un auto específico a partir de su ID o patente.
 *
 * @param {string} id - Identificador único del auto.
 * @param {string} patente - Número de patente del auto.
 * @returns {Promise<Auto>} - Datos del auto solicitado.
 */
export const getAuto = async (id: string, patente: string): Promise<Auto> => {
  const { data } = await axios.get<Auto>(
    `${API_URL}/api/autos/${id}?patente=${patente}`
  );
  return data;
};

/**
 * Crea un nuevo diagnóstico para un auto específico.
 *
 * @param {DiagnosticoFormData} data - Datos del diagnóstico, incluyendo síntomas y autoId.
 * @returns {Promise<Diagnostico>} - Diagnóstico creado con los datos registrados.
 */
export const createDiagnostico = async (
  data: DiagnosticoFormData
): Promise<Diagnostico> => {
  const response = await axios.post(`${API_URL}/api/diagnosticos`, data);
  return response.data;
};

/**
 * Obtiene un diagnóstico específico de un auto.
 *
 * @param {string} autoId - Identificador único del auto.
 * @param {string} diagnosticoId - Identificador único del diagnóstico.
 * @returns {Promise<Diagnostico>} - Datos del diagnóstico solicitado.
 */
export const getDiagnostico = async (
  autoId: string,
  diagnosticoId: string
): Promise<Diagnostico> => {
  const { data } = await axios.get<Diagnostico>(
    `${API_URL}/api/autos/${autoId}/diagnosticos/${diagnosticoId}`
  );
  return data;
};

/**
 * Obtiene la lista de todos los diagnósticos asociados a un auto específico.
 *
 * @param {string} autoId - Identificador único del auto.
 * @returns {Promise<Diagnostico[]>} - Lista de diagnósticos registrados para el auto.
 */
export const getDiagnosticos = async (
  autoId: string
): Promise<Diagnostico[]> => {
  const { data } = await axios.get<Diagnostico[]>(
    `${API_URL}/api/autos/${autoId}/diagnosticos`
  );
  return data;
};
