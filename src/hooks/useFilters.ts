import { useSelector } from "react-redux/es/hooks/useSelector";
import { useDispatch } from "react-redux";
import { actions } from "../store/figures";
import { State, Figure } from "../types/store";

export const useFilters = () => {
  const { figures } = useSelector((state: State) => state.figures);
  const { filters } = useSelector((state: State) => state.filters);
  const dispatch = useDispatch();

  let currentFigures = figures.filter((figure: Figure) => {
    if (!filters.colors.includes(figure.color)) return false;
    if (!filters.forms.includes(figure.form)) return false;
    if (figure.dark !== null) {
      return filters.dark === true ? figure.dark : !figure.dark;
    }
    return true;
  });

  dispatch(actions.changeFigures(currentFigures));
};
