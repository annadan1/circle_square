export interface Figures {
  figures: Figure[];
}

export interface Filters {
  forms: string[];
  colors: string[];
  shades: string;
  columns: number;
}

export interface Figure {
  form: string;
  color: string;
  dark: boolean;
}

export interface State {
  figures: Figures;
  filters: Filters;
}
