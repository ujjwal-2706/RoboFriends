import React from 'react';
import Card from './Card';

const CardArray1 = ({robots})=> {
    const array1 = robots.map((user,i) => {
        return (<Card id = {user.id} name = {user.name} email = {user.email}/>);
    })
    return (
        <div>
            {array1}
        </div>
    );
}
export default CardArray1;
