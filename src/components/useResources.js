import { useState, useEffect } from 'react';
import jsonPlaceholder from '../api/jsonPlaceholder';

const useResources = (patch) => {
    // if [ ] = componentDidMount called once
    // without [] is called every time component is rendered
    // [resource] check if is the same resource was posts and call only if no posts again
    // if don't change dont run inside arrow function

    // workaround if we dont want to make new function
    // const fetchResource = async (resource) => {
    //         const respone = await jsonPlaceholder.get(`/${resource}`);
    //         setResources(respone.data);
    //     }

    const [resources, setResources] = useState([]);

    useEffect(() => {
        (async (patch) => {
            const respone = await jsonPlaceholder.get(`/${patch}`);
            setResources(respone.data);
        })(patch)
    }, [patch]);

    // Called with prevProps
    // componentDidUpdate(prevProps)

    return resources;
};


export default useResources;