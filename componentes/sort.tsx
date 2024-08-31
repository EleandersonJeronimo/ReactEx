import { useState } from "react";

type Props = {
    itens: string[]
}

export function Sort({itens} : Props){
    const[itemSorteado, setItemSorteado] = useState<string>('')

    function sortear(){
        const index = Math.floor(Math.random() * itens.length)
        setItemSorteado(itens[index]);
    }

    return(
        <div>
            <p>{itemSorteado}</p>
            <button onClick={sortear}>Sortear</button>
        </div>
    )
        
}