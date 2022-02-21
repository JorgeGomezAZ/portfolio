import { createContext, useReducer } from "react";
export const TheamContext = createContext();

const INITIAL_STATE = { darkMode: false }

const theamReducer = (state, action) =>
{
    switch (action.type)
    {
        case "TOGGLE":
            return { darkMode: !state.darkMode }
        default:
            return state
    }
}

export const TheamProvider = (props) =>
{
    const [state, dispatch] = useReducer(theamReducer, INITIAL_STATE)
    return (<TheamContext.Provider value={{ state, dispatch }}>
        {props.children}
    </TheamContext.Provider>)
}