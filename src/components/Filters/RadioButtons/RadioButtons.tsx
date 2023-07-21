import { useState } from "react";
import { actions } from "../../../store/filters";
import { useDispatch } from "react-redux";

export const RadioButtons: React.FC = () => {
  const dispatch = useDispatch();
  const [checkedId, setCheckedId] = useState<string>("all");

  const handleClick = (e: React.ChangeEvent<HTMLInputElement>) => {
    let currentFilter = e.target.value;
    setCheckedId(e.target.value);
    if (currentFilter === "all") {
      dispatch(actions.changeDark(null));
    }
    if (currentFilter === "dark") {
      dispatch(actions.changeDark(true));
    }
    if (currentFilter === "light") {
      dispatch(actions.changeDark(false));
    }
  };

  return (
    <>
      <div>
        <input
          type="radio"
          id="all"
          value="all"
          checked={checkedId === "all" ? true : false}
          onChange={handleClick}
        />
        <label htmlFor="all">все</label>
      </div>
      <div>
        <input
          type="radio"
          id="dark"
          value="dark"
          checked={checkedId === "dark" ? true : false}
          onChange={handleClick}
        />
        <label htmlFor="dark">тёмные</label>
      </div>
      <div>
        <input
          type="radio"
          id="light"
          value="light"
          checked={checkedId === "light" ? true : false}
          onChange={handleClick}
        />
        <label htmlFor="light">светлые</label>
      </div>
    </>
  );
};
