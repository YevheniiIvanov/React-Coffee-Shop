import girldrinkcoffee from '../../resources/img/girl-drink-coffee.jpg';
import Blackbeans from '../black-beans/blackbeans';
import './about-our-beans.scss';

const AboutOurBeans = () => {
    return(
        <>
            <section className='aboutourbeans'>
                <div className="container aboutourbeans">
                    <div className="aboutourbeans__picture">
                        <img src={girldrinkcoffee} alt="girldrinkcoffee" />
                    </div>
                    <div className="aboutourbeans__info">
                        <div className="aboutourbeans__head">About our beans</div>
                        <Blackbeans/>
                        <div className="aboutourbeans__descr">
                            Extremity sweetness difficult behaviour he of. On <br/>disposal of as landlord horrible.<br/><br/>

                            Afraid at highly months do things on at. Situation<br/> recommend objection do intention<br/>
                            so questions.<br/>
                            As greatly removed calling pleased improve an.<br/> Last ask him cold feel<br/>
                            met spot shy want. Children me laughing we<br/> prospect answered followed. At it went<br/>
                            is song that held help face.
                        </div>
                    </div>
                    <div className="aboutourbeans__line"></div>
                </div>
            </section>
        </>
    )
}

export default AboutOurBeans;