import logo from "../images/logo.png"
import "./Header.css"
import { WarningCircle, UserCircle, Backpack, Wrench, HardDrives, Coins, FlowerLotus, DiamondsFour } from "phosphor-react"

const Header = () => {
    return (
    <div className="magnum-header">
        <div className="right-header">
            <img src={logo} alt="logo do league of legends" className="logo" />
            <span>jogar</span>
            <WarningCircle size={32} weight="fill" color="#037a97"/>
            <span>Inicio</span>
            <span>TFT</span>
            <span>Clash</span>
        </div>
        <div className="left-header">
            <div className="user-data-nav">
                <div className="inventory">
                    <span>
                        <UserCircle size={32} weight="fill" />
                    </span>
                    <span>
                        <Backpack size={32} weight="fill" />
                    </span>
                    <span>
                        <Wrench size={32} weight="fill" />
                    </span>
                    <span>
                        <HardDrives size={32} weight="fill" />
                    </span>
                    <span>
                        <Coins size={32} weight="fill" />
                    </span>
                </div>
                <div className="wallet">
                    <span className="wallet-data">
                        <span className="wallet-data riot-points-data">
                            <FlowerLotus size={20} weight="fill" color="#e3ba3d"/>
                        </span>
                        <span className="wallet-color-text">1000</span>
                    </span>
                    <span className="wallet-data">
                        <span className="wallet-data blue-essence">
                            <DiamondsFour size={20} weight="fill" color="#0ac9e4"/>
                        </span>
                        <span className="wallet-color-text">
                            1000
                        </span>
                    </span>
                </div>
                <div className="user-informations">
            
                </div>
            </div>
        </div>
    </div>
    );
}
 
export default Header;