import NewsOne from "../../../../../../../images/imagens-laucher/cblol_split_2.jpg"
import NewsTwo from "../../../../../../../images/imagens-laucher/riot_cenario_feminino.jpg"
import NewsThree from "../../../../../../../images/imagens-laucher/TWVmQurW1sMhq.jpg"
import NewsFour from "../../../../../../../images/imagens-laucher/0CbS5wOm8YIhq.jpg"
import NewsFive from "../../../../../../../images/imagens-laucher/HEADER_RESULTADOS_FINAL_RNG_X_T1.jpg"

import "./AsideNews.css"

const AsideNews = () => {
    return (
        <div className="aside-news-right">
            <div className="aside-notice">
                <img className="img-news" src={NewsOne} alt="Notícia sobre a volta do CBLOL" />
                <div className="aside-notice-text">
                    <h1>Com torcida, o CBLOL volta em 11 de junho</h1>
                    <p>Confira o caléndario da Segunda Etapa</p>
                </div>
            </div>
            <hr />
            <div className="aside-notice">
                <img className="img-news" src={NewsTwo} alt="Notícia sobre o investimento do cenário competitivo feminino" />
                <div className="aside-notice-text">
                    <h1>Investimento e foco no cenário feminino</h1>
                    <p>Saiba mais sobre a estratégia para incentivar o cenário femino de lol</p>
                </div>
            </div>
            <hr />
            <div className="aside-notice">
                <img className="img-news" src={NewsThree} alt="Entrevista com o jogador Titan" />
                <div className="aside-notice-text">
                    <h1>TitaN, o jogador intenso</h1>
                    <p>Conheça mais sobre a história do atirador da RED</p>                    
                </div>
            </div>
            <hr />
            <div className="aside-notice">
                <img className="img-news" src={NewsFour} alt="Entrevista com o jogador Keria" />
                <div className="aside-notice-text">
                    <h1>Keria, o Monstrão Genial</h1>
                    <p>Conheça mais sobre o Suporte da T1</p> 
                </div>
            </div>
            <hr />
            <div className="aside-notice">
                <img className="img-news" src={NewsFive} alt="Notícia sobre a RNG, que conseguiu ganhar da SKT1 no último jogo" />
                <div className="aside-notice-text">
                    <h1>RNG supera T1 e conquista...</h1>
                    <p>Grande Final foi decidida no quinto jogo e teve domínio total do lado azul</p>  
                </div>
            </div>
            <p><a href="">Ver todas as notícias</a></p>
        </div>
    );
}
 
export default AsideNews
;