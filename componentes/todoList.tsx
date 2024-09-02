// import React, { useState } from "react";
// import { ListItem2 } from "./ListItem2";

// type Chore = {
//   name: string;
//   done: boolean;
// };

// export const TodoList = () => {
//   const initialChores: Chore[] = [
//     { name: "Brasileirão", done: false },
//     { name: "Premier League", done: false },
//     { name: "La Liga", done: false }
//   ];

//   const [chores, setChores] = useState<Chore[]>(initialChores);

//   const toggleDone = (index: number) => {
//     const updatedChores = chores.map((chore, i) =>
//       i === index ? { ...chore, done: !chore.done } : chore
//     );
//     setChores(updatedChores);
//   };

//   return (
//     <div>
//       {chores.map((chore, index) => (
//         <ListItem2
//           key={index}
//           chore={chore}
//           index={index}
//           toggleDone={toggleDone}
//         />
//       ))}
//     </div>
//   );
// };

import React, { useState } from "react";
import { ListItem2 } from "./ListItem2";
import { NewChore } from "./newChore";

type Chore = {
  name: string;
  done: boolean;
};

export const TodoList = () => {
  const initialChores: Chore[] = [
    { name: "Matue", done: false },
    { name: "KayBlack", done: false },
    { name: "Major RD", done: false }
  ];

  const [chores, setChores] = useState<Chore[]>(initialChores);

  const appendChore = (name: string) => {
    setChores([...chores, { name, done: false }]);
  };

  return (
    <div>
      <NewChore appendChore={appendChore} />
      {chores.map((chore, index) => (
        <ListItem2
          key={index}
          chore={chore}
          index={index}
          toggleDone={(index) => {
            const updatedChores = [...chores];
            updatedChores[index].done = !updatedChores[index].done;
            setChores(updatedChores);
          }}
        />
      ))}
    </div>
  );
};
