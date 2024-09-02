import React, { useState } from "react";

type NewChoreProps = {
  appendChore: (name: string) => void;
};

export const NewChore = ({ appendChore } : NewChoreProps) => {
  const [newChoreName, setNewChoreName] = useState<string>("");

  const handleAddChore = () => {
    if (newChoreName.trim() !== "") {
      appendChore(newChoreName);
      setNewChoreName(""); // Limpa o input após adicionar
    }
  };

  return (
    <div>
      <input
        type="text"
        value={newChoreName}
        onChange={(e) => setNewChoreName(e.target.value)}
        placeholder="New chore"
      />
      <button onClick={handleAddChore}>Add</button>
    </div>
  );
};
