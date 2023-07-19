import { useState } from "react";

export const RadioButtons: React.FC = () => {
  const [checkedId, setCheckedId] = useState<string>("all");

  const handleClick = (e: React.ChangeEvent<HTMLInputElement>) => {
    setCheckedId(e.target.value);
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
