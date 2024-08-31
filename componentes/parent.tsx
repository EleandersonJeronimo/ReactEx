import { useState } from "react";
import { Child } from "./Child";

export function Parent(){
    const [text, setText] = useState<string>('Nada') 

    return(
        <div>
            <p className="text-blue-500">{text}</p>
            <Child setText={setText} />
        </div>

    )
}