import React, { useState } from 'react';

const Context = React.createContext(null);

const Wrapper = (props) => {
    const [isClient, setClient] = useState(false);
    const [rmName, setRMName] = useState('');

    return (
        <Context.Provider value={{ isClient, setClient, rmName, setRMName }}>
            {props.children}
        </Context.Provider>
    );
};

export default Wrapper;
export { Context };
