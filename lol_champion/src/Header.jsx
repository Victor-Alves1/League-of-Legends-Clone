import "./Header.css"
import { UserCircle, Backpack, Wrench, HardDrives, Coins, FlowerLotus, DiamondsFour } from "phosphor-react"

const Header = () => {
    return (
    <div className="magnum-header">
        <div className="right-header">
            <span>jogar</span>
            <span>!</span>
            <span>Inicio</span>
            <span>TFT</span>
            <span>Clash</span>
        </div>
        <div className="left-header">
            <div className="user-data-nav">
                <div className="inventory">
                    <span>
                        <UserCircle size={28} weight="fill" />
                    </span>
                    <span>
                        <Backpack size={28} weight="fill" />
                    </span>
                    <span>
                        <Wrench size={28} weight="fill" />
                    </span>
                    <span>
                        <HardDrives size={28} weight="fill" />
                    </span>
                    <span>
                        <Coins size={28} weight="fill" />
                    </span>
                </div>
                <div className="wallet">
                    <span className="wallet-data">
                        <span className="wallet-data riot-points-data">
                            <FlowerLotus size={20} weight="fill" />
                        </span>
                        <span className="wallet-color-text">1000</span>
                    </span>
                    <span className="wallet-data">
                        <span className="wallet-data blue-essence">
                            <DiamondsFour size={20} weight="fill" />
                        </span>
                        <span className="wallet-color-text">1000</span>
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