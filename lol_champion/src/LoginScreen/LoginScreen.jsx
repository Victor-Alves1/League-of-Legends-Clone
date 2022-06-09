import logo from "../../images/imagens-loginscreen/logo.png"
import bgLoginScreen from "../../images/imagens-loginscreen/wallpaper.jpg"
import facebookIcon from "../../images/imagens-loginscreen/facebook-icon.png"
import googleIcon from "../../images/imagens-loginscreen/google-icon.png"
import appleIcon from "../../images/imagens-loginscreen/apple-icon.png"

import "./LoginScreen.css"

const LoginScreen = ({setLogIn}) => {
    return (
        <div className="LoginScreen">
            <div className="aside-login-signup">
                <img className="logo-login-screen" src={logo} alt="Logo da Riot Games" />
                <h1>Fazer login</h1>
                <input 
                    type="text" 
                    name="idName" 
                    id="idName" 
                    placeholder="Escolha algum nome"
                />
                <input 
                    type="button" 
                    value="Acessar Conta" 
                    placeholder="Entrar!"
                    onClick={()=>setLogIn(true)}
                />
                <div className="login-with-another-platform">
                    <div className="icons-login icon-blue">
                        <img src={facebookIcon} alt="Botão para logar pela conta Facebook" />
                    </div>
                    <div className="icons-login icon-white">
                        <img src={googleIcon} alt="Botão para logar pela conta Google" />
                    </div>
                    <div className="icons-login icon-black">
                        <img src={appleIcon} alt="Botão para logar pela conta Apple" />
                    </div>
                </div>

            </div>
            <div className="bg-loginscreen">
                <img src={bgLoginScreen} alt="" />
            </div>
        </div>
    );
}
 
export default LoginScreen;