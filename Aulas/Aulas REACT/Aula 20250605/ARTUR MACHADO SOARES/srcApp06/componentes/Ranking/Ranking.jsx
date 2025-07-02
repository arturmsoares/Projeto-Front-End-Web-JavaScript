import React, { useEffect, useState } from 'react';
import style from './Ranking.module.css';

function Ranking() {

    const [users, setUsers] = useState(null);

    useEffect(() => {
        fetch('https://wilton-filho.github.io/PFJS-GitHub/APIs/fetch/versao01/03/js/users.json')
            .then(response => response.json())
            .then(dados => setUsers(dados.users)); // Aqui você pode atualizar o estado com os dados do ranking
    }, []);

    //com base nesse código podemos fazer a seção de dpoimentos da Landing page
    function showUsers() {
        return (
            <ul>
                {users.map(user => <li> <span className={style.alerta}>{user.name}</span> ({user.level}:{user.score})</li>)}
            </ul>
        )
    }

    return (
        <>

            <h2>Melhores Colocados(Ranking)</h2>
                {users && showUsers()}

        </>
    );
}

export default Ranking;