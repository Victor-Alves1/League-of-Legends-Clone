import HomeContent from "./HomeComponents/HomeContent";
import HomeNav from "./HomeComponents/HomeNav";
import bgHome from "../../../images/pride-banner-2022-ii.jpg"

const HomeBody = () => {
    return (
        <>
            {/* <img src={bgHome} alt="Plano de fundo especial do orgulho lgbt" /> */}
            <HomeNav/>
            <HomeContent/>
        </>
    );
}
 
export default HomeBody;