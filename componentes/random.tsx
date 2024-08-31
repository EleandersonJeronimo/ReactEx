import { Sort } from "./sort";

const cores = ['Azul', 'Vermelho', 'Amarelo', 'Verde', 'Cinza'];

export function Random(){
    return(
        <div>
            <Sort itens={cores} />
        </div>
    )
}

