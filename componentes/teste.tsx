import { useState } from "react";

export function Teste(){
    const [cont, setCont] = useState(10)

    return(
        <div>
            <p>{cont}</p>
            <button onClick={() => setCont(cont - 1)}>Decrementar</button>
        </div>
    )
}