import event1 from "../../../../../images/tf-graves-event.jpg"
import event2 from "../../../../../images/championship-lol.jpg"
import event3 from "../../../../../images/skins-sale.jpg"

import "./OverviewHome.css"

const OverviewHome = () => {
    return (
        <div>
            <div className="main-content-overview">
                <span>
                    <a href="#" className="button-layout small-letters-overview freeweek">
                        Rotação de campeões gratis
                    </a>
                </span>
                <span>
                    <h1>
                        Comemore o orgulho 2022 em runeterra e além!
                    </h1>
                </span>
                <span>
                    <p className="small-letters-overview">
                        Ganhe emotes, Booms, ícones e muita mais para comemorar o Orgulho com a nossa comunidade LGBTQIA+!
                    </p>
                </span>
                <span>
                    <a href="#" className="button-layout button-more-know">
                        SAIBA MAIS!
                    </a>
                </span>
            </div>
            <div className="carousel-news">
                <div>
                    <img src={event1} alt="" className="events-news"/>
                </div>
                <div>
                    <img src={event2} alt="" className="events-news"/>
                </div>
                <div>
                    <img src={event3} alt="" className="events-news"/>
                </div>
            </div>
        </div>
    );
}
 
export default OverviewHome;