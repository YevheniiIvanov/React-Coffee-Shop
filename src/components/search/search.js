import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { coffeeSearchTerm } from '../coffee-list/coffeeSlice';

import './search.scss';

const Search = () => {
    const dispatch = useDispatch();
    const [term, setTerm] = useState('');

    const onUpdateSearch = (e) => {
        const term = e.target.value;
        setTerm(term);
        dispatch(coffeeSearchTerm(term));       
    }

    return(
        <>
            <div className="searchandfilter__search">
            <div className="searchandfilter__look">Lookiing for</div>
            <input 
                type="text"
                className="searchandfilter__input"
                placeholder="start typing here..."
                value={term}
                onChange={(e) => onUpdateSearch(e)}/>
            </div>
        </>
    )
}

export default Search;
