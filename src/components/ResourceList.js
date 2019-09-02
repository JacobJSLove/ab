import React from 'react';
import useResources from './useResources';

// recive props
const ResourceList = ({ patch }) => {

    const resources = useResources(patch);

    if (resources.length === 0) {
        return <div>Loading...</div>
    };
    return (
        <ul>
            {resources.map(({id,title}) => (
             <li key={id}>{title}</li>
            ))}
        </ul>
    )
}

export default ResourceList;