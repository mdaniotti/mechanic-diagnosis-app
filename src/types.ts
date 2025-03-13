export interface Auto {
  _id: string;
  marca: string;
  modelo: string;
  color: string;
  patente: string;
}

export interface AutoFormData {
  marca: string;
  modelo: string;
  color: string;
  patente: string;
}

export interface Diagnostico {
  _id: string;
  autoId: number;
  sintomas: string;
  causas: {
    probabilidadAlta: string;
    probabilidadMedia: string;
    probabilidadBaja: string;
  };
  auto: Auto;
  createdAt: Date;
}

export interface DiagnosticoFormData {
  autoId: string;
  sintomas: string;
}
