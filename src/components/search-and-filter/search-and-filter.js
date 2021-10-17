
import './search-and-filter.scss';




const SearchAndFilter = (props) => {
    
    const buttonsData = [
        {name: 'All'},
        {name: 'Brazil'},
        {name: 'Kenya'},
        {name: 'Columbia'}
    ];

    const buttons = buttonsData.map(({name}) => {
        return(
            <button 
            className="searchandfilter__button"
            type="button"
            key={name}
            onClick={() => {props.onFilterSelect(name)}}>{name}</button>
        )
    });

    return (
        <>
            <div className="container searchandfilter">
                <div className="searchandfilter__search">
                    <div className="searchandfilter__look">Lookiing for</div>
                    <input 
                        type="text"
                        className="searchandfilter__input"
                        placeholder="start typing here..."/>
                </div>
                <div className="searchandfilter__filter">
                    <div className="searchandfilter__info">Or filter</div>
                    {buttons}
                </div>
            </div>
        </>
    )
}

export default SearchAndFilter;