import React from "react";

interface Props {
  id: string;
  text: string;
}

export const Checkbox: React.FC<Props> = ({ id, text }) => {
  return (
    <div>
      <input type="checkbox" id={id} />
      <label htmlFor={id}>{text}</label>
    </div>
  );
};
