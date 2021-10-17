
import './header.scss';

const Header = () => {
    return(
        <>
            <header>
                    <div className="header__head">  
                        <div className="header__wrapper">
                            <img src="/img/icons/two-beans.png" alt="black" className="header__picture"/>
                            <div >Coffee house</div>
                        </div>                  
                        <div >Our coffee</div>
                        <div >For your pleasure</div>
                    </div>
                </header>
            
        </>
    )
}

export default Header;