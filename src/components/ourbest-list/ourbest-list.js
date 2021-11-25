// import Ourbestlistitem from '../ourbest-list-item/ourbest-list-item';

import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchOurBest, selectAll } from './ourBestSlice';

import './ourbest-list.scss';

const OurbestList = () => {

    const arrOurBest = useSelector(selectAll);

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchOurBest());
        // eslint-disable-next-line
    },[])
    

    
    const elements = arrOurBest.map(item => {
        const {id, name, src, price} = item;

        return(
            <div className="ourbest" key={id}>
                <img className='ourbest__picture' src={src} alt={name} />
                <div className='ourbest__name'>{name}</div>
                <div className='ourbest__price'>{price}</div>
            </div>
        )
    });

    return (
        <>
            <section className="ourbestlist">
                <div className="container">
                    <h3>Our best</h3>
                    <div className="ourbestlist__content">
                        {elements}
                    </div>
                </div>
            </section>
        </>
    )
}

export default OurbestList;