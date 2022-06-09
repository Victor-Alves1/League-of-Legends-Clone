import OverviewHome from './Overview.jsx/OverviewHome';
import CblolHome from './CBLOL.jsx/CblolHome';
import './HomeNav.css'
const HomeNav = ({setHomeScreen, setBg}) => {
    return (
        <div className='nav-bar'>
            <span onClick={()=>{setHomeScreen(<OverviewHome/>), setBg('bgHome')}}>Visão geral</span>
            <span onClick={()=>{setHomeScreen(<CblolHome/>), setBg('bgDark')}}>CBLOL</span>
            <span>Notas de atualização</span>
        </div>
    );
}
 
export default HomeNav;