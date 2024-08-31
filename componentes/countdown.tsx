import { useState, useEffect } from "react";

export function Countdown(){
    const [count, setCont] = useState(10)

    useEffect(() => {
        console.log(`O valor foi alterado`);
      }, [count]);
    return(
        <div>
            <p>{count}</p>
            <button onClick={() => setCont(count - 1)} disabled={count === 0}>Decrementar</button>
        </div>
    )
}