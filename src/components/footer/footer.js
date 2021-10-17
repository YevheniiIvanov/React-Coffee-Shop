import Blackbeans from '../black-beans/blackbeans';
import './footer.scss';

const Footer = () => {
    return(
        <>
            <footer className='footer'>
                <div className="footer__foot">  
                    <div className="footer__wrapper">
                        <img src="/img/icons/two-beans-black.png" alt="black" className="footer__picture"/>
                        <div >Coffee house</div>
                    </div>                  
                    <div >Our coffee</div>
                    <div >For your pleasure</div>
                </div>
                <Blackbeans/>
            </footer>
        </>
    )
}

export default Footer;