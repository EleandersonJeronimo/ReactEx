import { useState } from "react"

export function LoginForm(){
    const [text, setText] = useState('')
    const [password, setPassword] = useState('')

    function msg(){
        alert(`Text: ${text} - Password: ${password}`)
    }

    return(
        <div>
            <input 
                type="text"
                onChange={(e) => setText(e.target.value)}/> <br />

            <input
                type="password"
                name="senha" id="senha"
                onChange={(e) => setPassword(e.target.value)} />

            <button onClick={msg}>Enviar</button>
        </div>
    )
}