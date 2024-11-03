export interface Exercise {
    id: number; // Cambia esto al tipo de id que devuelve tu API
    name: string;
    description: string;
    image_url?: string; // Usar ? para indicar que puede ser opcional
  }
  