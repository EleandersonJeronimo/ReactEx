import { ListItem } from './listItem'

// const times = ['Santos', 'Liverpool', 'Arsenal', 'Juventus', 'Real Madrid']

// export function ListContainer(){
//      return(
//          <div>
//              {times.map((time, index)=> (
//                  <ListItem key={index}>{`${index}: ${time}`}</ListItem>
//              ))}
//          </div>
//      )
//  }

type Grade = {
    nome: string;
    sigla: string;
    }

const materias : Grade[] = [
    {nome: 'Banco de dados', sigla:'XPAD01'},
    {nome: 'Grafos', sigla:'SMAC03'},
    {nome: 'Engenharia economica', sigla: 'IEPG10'},
    ]
export function ListContainer(){
    return(
        <div>
            {materias.map((materia, index) => (
            <ListItem key={index}>{index} - nome: {materia.nome} / Sigla: {materia.sigla} </ListItem>
            ))}
        </div>
    )
}

