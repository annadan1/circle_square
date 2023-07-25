export interface Figures {
  figures: Figure[];
}

export interface Filters {
  figures: string[];
  colors: string[];
  dark: null | boolean;
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
