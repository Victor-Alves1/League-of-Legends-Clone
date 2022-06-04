import '../AsideLeft.css'
const AsideLeftSkins = () => {
    return (
        <div className="containerLeft margin-skins-acquired">
            <div className="mastery-numbers">
                <div className="skins-acquired">
                        <h2>100</h2>
                        <p>skins habilitadas</p>
                </div>
                <div className="skins-type">
                    <h2>100</h2>
                    <p>marcos alcançados</p>
                </div>
            </div>




            <input type="text" name="" id="" placeholder="Buscar"/>
            
                
            
            <select name="" id="">
                <option value="">Todos os campeões</option>
                <option value="">Posição mais popular</option>
                <option value="">Função</option>
                <option value="">Propriedade</option>
            </select>
            <select name="" id="">
                <option value="">
                    Ordem alfabética &#9650;
                </option>
                <option value="">
                    Maestria de campeões
                </option>
                <option value="">
                    Marcos alcançados
                </option>
                <option value="">
                    Baú disponível
                </option>
            </select>
        </div>
    );
}
 
export default AsideLeftSkins;