import blackbeans from '../../resources/img/icons/three-beans-black.png';

import './blackbeans.scss';

const Blackbeans = () => {
    return (
        <>
            <div className="blackbeans">
                <div className="blackbeans__black"></div>
                <img src={blackbeans} alt="blackbeans"/>
                <div className="blackbeans__black"></div>
            </div>
        </>
    )
}

export default Blackbeans;