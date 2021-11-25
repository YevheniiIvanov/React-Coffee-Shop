import Search from '../search/search';
import { useDispatch } from 'react-redux';
import './search-and-filter.scss';
import { coffeefilterChanged } from '../coffee-list/coffeeSlice';

const SearchAndFilter = () => {
    const dispatch = useDispatch();
    
    const buttonsData = [
        {name: 'All'},
        {name: 'Brazil'},
        {name: 'Kenya'},
        {name: 'Columbia'}
    ];

    const buttons = buttonsData.map((items) => {

        const {name} = items;

        return(
            <button 
            className="searchandfilter__button"
            type="button"
            key={name}
            onClick={() => dispatch(coffeefilterChanged(name))}>{name}</button>
        )
    });

    return (
        <>
            <div className="container searchandfilter">
                <Search/>
                <div className="searchandfilter__filter">
                    <div className="searchandfilter__info">Or filter</div>
                    {buttons}
                </div>
            </div>
        </>
    )
}

export default SearchAndFilter;