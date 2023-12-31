import { Filters, Figure } from "../types/store";

export const UseFilters = (figures: Figure[], filters: Filters) => {
  let currentFigures = figures.filter((figure: Figure) => {
    if (filters.colors.includes(figure.color)) return false;
    if (filters.figures.includes(figure.form)) return false;
    if (filters.dark !== null) {
      return filters.dark === figure.dark;
    }
    return true;
  });
  return currentFigures;
};
