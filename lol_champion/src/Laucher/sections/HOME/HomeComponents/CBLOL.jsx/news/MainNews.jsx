import PrincipalNews from "../../../../../../../images/imagens-laucher/W_bSW84vJ4Msd.jpg"
import SecondNews from "../../../../../../../images/imagens-laucher/8wGtf0bTaNQhq.jpg"
import ThirdNews from "../../../../../../../images/imagens-laucher/escalacoes_cblol.jpg"


import "./MainNews.css"

const MainNews = () => {
    return (
        <>
            <div className="main-news container-main-news">
                <img className="img-main-news" src={PrincipalNews} alt="Notícia princiapl: A volta do CBLOL" />
                <div className="news-text">
                    <h1>A retomada começou | CBLOL2022</h1>
                    <p>Segunda etapa começa 11 de junho</p>
                </div>
            </div>
            <div className="subprincipal-news">
                <div className="container-main-news">
                    <img className="img-submain-news" src={SecondNews} alt="Momentos e lembranças do MSI" />
                    <h1  className="news-text">MSI - Momentos e Lembranças</h1>
                </div>
                <div className="container-main-news">
                    <img className="img-submain-news" src={ThirdNews} alt="Escalações do CBLOL" />
                    <h1 className="news-text">CBLOL2022 - Escalações Oficiais</h1>
                </div>
            </div>
        </>
    );
}
 
export default MainNews;