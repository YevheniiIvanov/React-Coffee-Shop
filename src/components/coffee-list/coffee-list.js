
import CoffeeListItem from '../coffee-list-item/coffee-list-item';
import './coffee-list.scss';

const CoffeeList = ({data}) => {

    const elements = data.map(item => {
        const {id, ...itemProps} = item;

        return(
            <CoffeeListItem key={id}
            {...itemProps}/>
        )
    });

    return(
        <>
            <div className="container coffeelist">
                {elements}
            </div>
        </>
    )
}

export default CoffeeList;