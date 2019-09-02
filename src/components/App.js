import React, { useState } from 'react';
import ResourceList from './ResourceList';
import UserList from './UserList';

const App = () => {
    const [patch, setPatch] = useState('posts');


    return (
        <div>
            <UserList />
            <div>
                <button onClick={() => setPatch('posts')}>Posts</button>
                <button onClick={() => setPatch('todos')}>Todos</button>
            </div>
            <ResourceList patch={patch} />
    	</div>
    )
}

export default App;