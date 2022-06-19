import OverviewHome from './Overview/OverviewHome';
import CblolHome from './CBLOL/CblolHome';
import './HomeNav.css'
const HomeNav = ({setHomeScreen, setBg}) => {
    return (
        <div className='nav-bar'>
            <span onClick={()=>{setHomeScreen(<OverviewHome />), setBg('bgHome')}}>Visão geral</span>
            <span onClick={()=>{setHomeScreen(<CblolHome />), setBg('bgDark')}}>CBLOL</span>
            <span>Notas de atualização</span>
        </div>
    );
}
 
export default HomeNav;