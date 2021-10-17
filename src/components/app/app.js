import { Component } from "react";
import AboutOurBeans from "../about-our-beans/about-our-beans";
import CoffeeList from "../coffee-list/coffee-list";


// import AboutUs from "../about-us/about-us";
// import Description from "../description/description";
// import OurbestList from "../ourbest-list/ourbest-list";
import Footer from "../footer/footer";
import OurCoffeeHead from "../our-coffee-head/our-coffee-head";
import SearchAndFilter from "../search-and-filter/search-and-filter";

import './app.scss';

class App extends Component {
    state = {
        data: [
            {name: 'Solimo Coffee Beans 2 kg', price: '10.73$', src: '/img/class-coffee/solimo.jpg', id: 1},
            {name: 'Presto Coffee Beans 1 kg', price: '15.99$', src: '/img/class-coffee/presto.jpg', id: 2}, 
            {name: 'AROMISTICO Coffee 1 kg', price: '6.99$', src: '/img/class-coffee/aromistico.jpg', id: 3}
        ],
        coffee: [
            {name: 'Solimo Coffee Beans 2 kg kg', country: 'Brazil', price: '6.99$', src: '/img/coffee-shop.jpg', id: 1},
            {name: 'AROMISTICO Coffee 1 kg', country: 'Kenya', price: '6.99$', src: '/img/coffee-shop.jpg', id: 2},
            {name: 'Presto Coffee Beans 1 kg', country: 'Columbia', price: '6.99$', src: '/img/coffee-shop.jpg', id: 3},
            {name: 'Presto Coffee Beans 1 kg', country: 'Brazil', price: '6.99$', src: '/img/coffee-shop.jpg', id: 4},
            {name: 'AROMISTICO Coffee 1 kg', country: 'Brazil', price: '6.99$', src: '/img/coffee-shop.jpg', id: 5},
            {name: 'AROMISTICO Coffee 1 kg', country: 'Brazil', price: '6.99$', src: '/img/coffee-shop.jpg', id: 6}
        ],
        filter: 'All',
        term: ''
    }

    filterPost = (items, filter) => {
        switch (filter) {
            case 'Brazil':
                return items.filter(item => item.country === filter);
            case 'Kenya':
                return items.filter(item => item.country === filter);
            case 'Columbia':
                return items.filter(item => item.country === filter);
            case 'All':
                return items;
            default: return items;
        }
    }

    onFilterSelect = (filter) => {
        this.setState(({filter}));
    }

    onUpdateSearch = (term) => {
        this.setState({term});
    }

    searchEmp = (items, term) => {
        if (items.length === 0){
            return items;
        }
        
        return items.filter( item => {
            return item.name.indexOf(term) > -1
        })
    }

    render() {
        const {coffee, filter, term} = this.state;
        const visiableData = this.filterPost(this.searchEmp(coffee, term), filter);
        return(
            <>
                {/* <AboutUs/>
                <Description/>
                <OurbestList
                data={this.state.data}/> */}
                <OurCoffeeHead/>
                <AboutOurBeans/>
                <SearchAndFilter
                onFilterSelect={this.onFilterSelect} 
                onUpdateSearch={this.onUpdateSearch}/>
                <CoffeeList
                data={visiableData}/>
                <Footer/>
            </>
        )
    }
}

export default App