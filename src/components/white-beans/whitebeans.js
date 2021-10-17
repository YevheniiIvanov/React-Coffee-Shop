import whitebeans from '../../resources/img/icons/three-beans-white.png';

import './whitebeans.scss';

const Whitebeans = () => {
    return (
        <>
            <div className="whitebeans">
                <div className="whitebeans__white"></div>
                <img src={whitebeans} alt="whitebeans"/>
                <div className="whitebeans__white"></div>
            </div>
        </>
    )
}

export default Whitebeans;