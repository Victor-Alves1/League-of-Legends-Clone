import MainNews from "./news/MainNews";
import AsideNews from "./news/AsideNews";

import "./CblolHome.css"
const CblolHome = () => {

    return (
        <div className="News">
            <div className="main-news-container">
                <MainNews />
            </div>
            <div className="aside-news">
                <AsideNews />
            </div>
        </div>
    );
}
 
export default CblolHome;