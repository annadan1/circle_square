import React, { useState } from "react";

interface Props {
  id: string;
  text: string;
}

export const Checkbox: React.FC<Props> = ({ id, text }) => {
  const [checked, setChecked] = useState<boolean>(true);
  return (
    <div>
      <input
        type="checkbox"
        id={id}
        checked={checked}
        onChange={() => setChecked((prev) => !prev)}
      />
      <label htmlFor={id}>{text}</label>
    </div>
  );
};
