import { useState, KeyboardEvent } from "react";
import { BsSearch } from "react-icons/bs";
import classes from "./Search.module.css";

export type SearchProps = {
    loadUser: (userName: string) => Promise<void>;
}
export default function Search({loadUser}: SearchProps){
    const [userName, setUsername] = useState("");

    function handleKeyDown(e: KeyboardEvent){ //keyboard event é aquilo que se usa para ler o teclado
        if(e.key === 'Enter') {
            loadUser(userName); //passa a função loadUser com o usuario escrito assim como é feito no button
        }
    };

    return (
        <div className={classes.search}>
            <h2>Busque por usuários:</h2>
            <p>Conheça seus melhores repositórios</p>
            <div className={classes.search_container}>
                <input type="text" placeholder="Digite o nome do usuario..."
                onChange={(e) => setUsername(e.target.value)}
                onKeyDown={handleKeyDown}/>
                <button onClick={() => loadUser(userName)}>
                    <BsSearch/>
                </button>
            </div>
        </div>
    );
}