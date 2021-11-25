import AboutOurBeans from "../about-our-beans/about-our-beans";
import CoffeeList from "../coffee-list/coffee-list";
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';

import AboutUs from "../about-us/about-us";
import Description from "../description/description";
import OurbestList from "../ourbest-list/ourbest-list";
import Footer from "../footer/footer";
import OurCoffeeHead from "../our-coffee-head/our-coffee-head";
import SearchAndFilter from "../search-and-filter/search-and-filter";

import './app.scss';

const App = () => {

    return(
        <Router>
            <Switch>
                <Route exact path='/'>
                    <AboutUs/>
                    <Description/>
                    <OurbestList/>                        
                </Route>
                <Route exact path='/our_coffee'>
                    <OurCoffeeHead/>
                    <AboutOurBeans/>
                    <SearchAndFilter/>
                    <CoffeeList/>
                </Route>
            </Switch>
            <Footer/>
        </Router>
    )
}

export default App