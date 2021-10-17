
import './coffee-list-item.scss';

const CoffeeListItem = ({name, price, country, src}) => {
    return(
        <>
            <div className="coffeelistitem">
                <img src={src} alt="picture1" className="coffeelistitem__picture"/>
                <div className="coffeelistitem__name">{name}</div>
                <div className="coffeelistitem__country">{country}</div>
                <div className="coffeelistitem__price">{price}</div>
            </div>
        </>
    )
}

export default CoffeeListItem;