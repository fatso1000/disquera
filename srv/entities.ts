export interface IMusicos {
  ID: number;
  active: boolean;
  nombre: string;
  apellido: string;
  banda_nombre: string;
}
export interface IGrabaciones {
  ID: string;
  createdAt: Date;
  modifiedAt: Date;
  nombre_disco: string;
  nombre_banda: string;
  genero_banda: string;
  musico_apellido: string;
  musico_nombre: string;
  horas_grabadas: number;
  promocion: boolean;
}
