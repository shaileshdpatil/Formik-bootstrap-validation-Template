import React, {useState} from 'react';
import NoteContext from "./valueContext";

const AuthProvider = (props) => {
    const [state,setState] = useState({});

    const updateState = (value) => {
        setState((prev)=>({...prev,value}));
    }

    const data = {state,updateState};
    return (
        <NoteContext.Provider value={data}>
            {props.children}
        </NoteContext.Provider>
    );
};

export default AuthProvider;
