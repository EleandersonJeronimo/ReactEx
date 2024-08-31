import { useState ,useEffect } from "react";

export function Timer(){
    const [time, setTime] = useState(0)

    useEffect(() => {
        const tot = setInterval(() => setTime(s => s + 1), 1000)
        return() => clearInterval(tot)
    }, [])

    return(
        <h1>{time}</h1>
    )
}