import { Component } from 'react';

import './search.scss';

class Search extends Component {
    state = {
        term: ''
    }

    onUpdateSearch = (e) => {
        const term = e.target.value;
        this.setState({term});
        this.props.onUpdateSearch(term)
    }

    render(){
        return(
            <>
                <div className="searchandfilter__search">
                <div className="searchandfilter__look">Lookiing for</div>
                <input 
                    type="text"
                    className="searchandfilter__input"
                    placeholder="start typing here..."
                    value={this.state.term}
                    onChange={this.onUpdateSearch}/>
                </div>
            </>
        )
    }
}

export default Search;
