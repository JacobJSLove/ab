import React from 'react';
import useResources from './useResources';

// recive props
const UserList = () => {
    const users = useResources('users');

    if (users.length === 0) {
        return <div>Loading...</div>
    };
    return (
        <ul>
            {users.map(({id,name}) => (
             <li key={id}>{name}</li>
            ))}
        </ul>
    )
}

export default UserList;