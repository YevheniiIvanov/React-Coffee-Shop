import { NavLink } from 'react-router-dom';
import './header.scss';

const Header = () => {
    return(
        <>
            <header>
                <div className="header__head">  
                    <div className="header__wrapper">
                        <img src="/img/icons/two-beans.png" alt="black" className="header__picture"/>
                    </div> 
                    <NavLink exact to='/' activeStyle={{color: "red"}} style={{color: 'white'}}> Coffee house </NavLink>                 
                    <NavLink exact to='/our_coffee' activeStyle={{color: "red"}} style={{color: 'white'}}> Our coffee </NavLink>
                    <NavLink exact to='' activeStyle={{color: "red"}} style={{color: 'white'}}> For your pleasure </NavLink>
                </div>
            </header>
            
        </>
    )
}

export default Header;