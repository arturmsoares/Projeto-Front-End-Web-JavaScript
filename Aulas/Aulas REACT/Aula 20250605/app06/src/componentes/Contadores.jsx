import React, { useEffect, useState } from 'react';

function Contadores() {

    const [cont1, setCont1] = useState(0);
    const [cont2, setCont2] = useState(0);

    useEffect(() => {
        console.log(Math.random()); // mostra um numero aleatório a cada renderização ou atualização do componente
        }, [cont1]) //indica quando o useEffect deve ser executado, neste caso, sempre que cont1 for atualizado


        // }, ) roda sempre que o componente é renderizado ou atualizado
        // }, []) roda uma vez quando o componente é montado, sem dependências
        // }, [cont1]) roda uma vez somente quando cont1 é atualizado
        // }, [cont1, cont2]) roda uma vez quando os compnentes cont1 ou cont2 são atualizados
    return (
        <>
            <form>
                <input type="button" value="Contador 1: Incrementar +1" onClick={() => setCont1(cont1 + 1)} />
                <input type="button" value="Contador 2: Incrementar +1" onClick={() => setCont2(cont2 + 1)} />
            </form>

            <p>Contador 1: {cont1}</p>
            <p>Contador 2: {cont2}</p>

        </>

    );
}

export default Contadores;