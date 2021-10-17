import './ourbest-list-item.scss';
const Ourbestlistitem = ({name, price, src}) => {

    return(
        <>
            <div className="ourbest">
                <img className='ourbest__picture' src={src} alt="1" />
                <div className='ourbest__name'>{name}</div>
                <div className='ourbest__price'>{price}</div>
            </div>
        </>
    )
}
export default Ourbestlistitem;