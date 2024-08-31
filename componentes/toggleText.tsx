import { useState } from "react";
import style from './toggleText.module.css'

export function ToggleText(){

    const [text, setText] = useState<string>('');


    return(
        <div className={style.toggleText}>
            <p className={style.text}>{text}</p>
            <button className={style.button}
            onClick={() => setText('30praum')}>Text1</button>
            
            <button className={style.button}
            onClick={() => setText('30pradois')}>Text2</button>
        </div>
    )
}