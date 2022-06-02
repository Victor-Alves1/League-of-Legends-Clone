import "../AsideLeft.css"
const AsideLeftChampions = () => {
    return (
        <div className="containerLeft">
            <div className="mastery-numbers">
                <div className="total-score-mastery">
                    <h2>100</h2>
                    <p>pontuação total de maestria</p>
                </div>
                <div className="goals-reached-mastery">
                    <h2>100</h2>
                    <p>marcos alcançados</p>
                </div>
            </div>
            <input type="text" name="" id="" placeholder="Buscar"/>
            
                <label htmlFor="acquired-champions-checkmark" className="acquired-champions">
                    <input type="checkbox" name="" id="acquired-champions-checkmark" />
                    <span id="checkmark">✓</span> 
                    Exibir desabilitadas
                </label>
            
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
 
export default AsideLeftChampions;