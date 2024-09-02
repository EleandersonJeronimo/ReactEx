import { useState, useEffect } from "react";

export function DataFetcher() {
    const [imagem, setImagem] = useState<string>();

    const fetchImagem = () => {
        fetch("https://dog.ceo/api/breeds/image/random")
            .then((resp) => resp.json())
            .then((obj) => {
                setImagem(obj.message);
            });
    };

    useEffect(() => {
        fetchImagem(); // Carrega a imagem inicialmente
    }, []);

    return (
        <div>
            <img src={imagem} alt="Random Dog" />
            <button onClick={fetchImagem}>Mudar Imagem</button>
        </div>
    );
}