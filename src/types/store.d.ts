export interface Figures {
  figures: Figure[];
}

export interface Filter {
  forms: string[];
  colors: string[];
  dark: null | boolean;
  columns: number;
}

export interface Filters {
  filters: Filter;
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
