import "./Header.css"
import logo from "../../../../../images/imagens-laucher/logo.png"
import { WarningCircle, UserCircle, Backpack, Wrench, HardDrives, Coins, FlowerLotus, DiamondsFour } from "phosphor-react"
import { Link } from "react-router-dom";

const Header = ({setHeaderNav, setBg}) => {
    return (
    <div className="magnum-header">
        <div className="left-header link-hover">
            <img src={logo} alt="logo do league of legends" className="logo" />
            <span>jogar</span>
            <WarningCircle size={30} weight="fill" color="#037a97"/>
            <Link to={"/home"}>
                <span>Inicio</span>
            </Link>
            <span>TFT</span>
            <span>Clash</span>
        </div>
        <div className="right-header">
            <div className="user-data-nav">
                <div className="inventory link-hover">
                    <span>
                        <UserCircle size={26} weight="fill" />
                    </span>
                    <Link to={"/inventory"}>
                        <span>
                            <Backpack size={26} weight="fill" />
                        </span>
                    </Link>
                    <span>
                        <Wrench size={26} weight="fill" />
                    </span>
                    <span>
                        <HardDrives size={26} weight="fill" />
                    </span>
                    <span>
                        <Coins size={26} weight="fill" />
                    </span>
                </div>
                <div className="wallet">
                    <span className="wallet-data">
                        <span className="wallet-data riot-points-data">
                            <FlowerLotus size={18} weight="fill" color="#e3ba3d"/>
                        </span>
                        <span className="wallet-color-text">1000</span>
                    </span>
                    <span className="wallet-data">
                        <span className="wallet-data blue-essence">
                            <DiamondsFour size={18} weight="fill" color="#0ac9e4"/>
                        </span>
                        <span className="wallet-color-text">
                            1000
                        </span>
                    </span>
                </div>
            </div>
        </div>
    </div>
    );
}
 
export default Header;