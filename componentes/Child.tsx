import { useState } from "react";

type ChildProps = {
    setText: (value : string) => void
}

export function Child({setText} : ChildProps){
    const [inputValue, setInputValue] = useState('')
    return(
        <div>
            <input type="text"
             placeholder="Digite algo"
             onChange={(e) => setInputValue(e.target.value)}
             className="p-2 border border-gray-300 rounded-md w-300 mb-4 focus:outline-none focus:ring-2 focus:ring-blue-500 "/> <br />

            <button onClick={() => setText(inputValue)}
            className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500">Teste</button>
        </div>

    )
}

