import style from './greeting.module.css'

type GreetingProps = {
    name: string,
    age: number
}

export function Greeting(props : GreetingProps){
    return(
        <div>
            <h1 className={style.greeting}>Hello world</h1>
            <p className={style.dados}>Nome: {props.name} - Idade: {props.age}</p>
        </div>
    )
}
