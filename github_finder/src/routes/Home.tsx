import { useState } from "react";
import { UserProps } from "../types/User";
import Search from "../components/Search"
import User from "../components/User"
import Error from "../components/Error";

export default function Home(){
    const [user, setUser] = useState<UserProps | null>(null); //sempre é bom tipar para evitar erros
    const [error,setError] = useState(false);

    async function loadUser(userName:string){
        setError(false);
        setUser(null);
        const res = await fetch(`https://api.github.com/users/${userName}`);
        const data = await res.json()
        if(res.status === 404){
            setError(true);
            return;
        }
        const {avatar_url, login, location, followers, following} = data ;

        const userData:UserProps = {
            avatar_url,
            login,
            location,
            followers,
            following,
        };
        setUser(userData);
    }
    return (
        <div>
            <Search loadUser={loadUser}/>
            {user && <User {...user} />}
            {error && <Error />}
        </div>
    )
}