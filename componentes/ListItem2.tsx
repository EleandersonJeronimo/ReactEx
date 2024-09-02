import React from "react";

type Chore = {
  name: string;
  done: boolean;
};

type ListItemProps = {
  chore: Chore;
  index: number;
  toggleDone: (index: number) => void;
};

export const ListItem2 = ({ chore, index, toggleDone } : ListItemProps) => {
  return (
    <div>
      <span>{index + 1}. </span>
      <input
        type="checkbox"
        checked={chore.done}
        onChange={() => toggleDone(index)}
      />
      <span style={{ textDecoration: chore.done ? "line-through" : "none" }}>
        {chore.name}
      </span>
    </div>
  );
};
