import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchCoffee } from './coffeeSlice';
import './coffee-list.scss';

const CoffeeList = () => {
    
    const {coffeeFilter} = useSelector(state => state.coffee);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchCoffee());
        // eslint-disable-next-line
    }, []);

    const renderCoffeeList = (arr) => {
        
        if (arr.length === 0) {
            return (
                <h5 className="text-center mt-5">No coffee</h5>
            )
        }

        return arr.map(({id, name, country, price, src}) => {
            return (
                <div className="coffeelistitem" key={id}>
                    <img src={src} alt="picture1" className="coffeelistitem__picture"/>
                    <div className="coffeelistitem__name">{name}</div>
                    <div className="coffeelistitem__country">{country}</div>
                    <div className="coffeelistitem__price">{price}</div>
                </div>
            )
        })
    }

    const elements = renderCoffeeList(coffeeFilter);

    return(
        <>
            <div className="container coffeelist">
                {elements}
            </div>
        </>
    )
}

export default CoffeeList;