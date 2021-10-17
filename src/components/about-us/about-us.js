import Header from '../header/header';
import Whitebeans from '../white-beans/whitebeans';

import './about-us.scss';

const AboutUs = () => {

    return (
        <>
            <section className="about">
                <Header/>                
                <div className="container">
                    <div className="about__info">
                        <h1>Everything You Love About Coffee</h1>
                        <Whitebeans/>
                        <h2>We makes every day full of energy and taste</h2>
                        <h2>Want to try our beans?</h2>
                        <button className="about__button">More</button>
                    </div>
                </div>
            </section>
        </>
    )
}

export default AboutUs;