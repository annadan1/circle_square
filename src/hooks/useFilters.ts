import { Filters, Figure } from "../types/store";

export const UseFilters = (figures: Figure[], filters: Filters) => {
  console.log("figures->", figures, "filters->", filters);
  let currentFigures = figures.filter((figure: Figure) => {
    if (filters.colors.includes(figure.color)) return false;
    if (filters.forms.includes(figure.form)) return false;
    if (figure.dark !== null) {
      return filters.dark === figure.dark;
    }
    return true;
  });
  return currentFigures;
};
