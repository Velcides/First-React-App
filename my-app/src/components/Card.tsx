// Criando e exportando um componente no React
// Props drilling - passar propriedades de um local para o outro, nos componentes no caso id.
// interface ICard {
//     id: number,
//     paragraph: string,
//     details: string
// }

// export const Card = ( { id, paragraph, details } : ICard) => { 
//     //console.log(id)
//     return (
//         <div>
//             <h1>Card Component {id}</h1>
//             <p>{paragraph}</p>
//             <p>{details}</p>
//         </div>  
//     )
// }
// OBS: React Fragment <></>
// Todo componente é uma função

import React from 'react';
import { Center, Input } from '@chakra-ui/react';

export const Card: React.FC = () => {
    return (
        <div className="card">
            <Center>
                <h1>Faça o login</h1>
            </Center>
            <Input placeholder="E-mail" marginY="5px" />
            <Input placeholder="Password" marginY="5px" />
        </div>
    );
};


