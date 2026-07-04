import ListView from './ListView';
import { SearchProvider } from '../context/SearchContext';
import { ItemsProvider } from '../context/ItemsContext';



//Componentes de Presentación y componentes contenedores

//Container component - processes
function List(){

    return(
        <SearchProvider>
            <ItemsProvider>
                <ListView/>
            </ItemsProvider>
        </SearchProvider>
        
        
    )
}

export default List;