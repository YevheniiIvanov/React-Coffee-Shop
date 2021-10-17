import Ourbestlistitem from '../ourbest-list-item/ourbest-list-item';

import './ourbest-list.scss';

const OurbestList = ({data}) => {

    const elements = data.map(item => {
        const {id, ...itemProps} = item;

        return(
            <Ourbestlistitem key={id}
            {...itemProps}/>
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