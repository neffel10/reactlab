import { createContext, useState } from "react";

export const SearchContext = createContext({message: "hola mundo"});

export function SearchProvider({children}){
    let [search, setSearch]=useState();
    return(
        <SearchContext.Provider value={ { search, setSearch}}>
            {children}
        </SearchContext.Provider>
    )
}