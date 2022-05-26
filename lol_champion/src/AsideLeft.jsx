import "./AsideLeft.css"
const AsideLeft = () => {
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
            <select name="" id="">
                <option value="">Propriedade</option>
            </select>
            <select name="" id="">
                <option value="">Marcos alcançados</option>
            </select>
        </div>
    );
}
 
export default AsideLeft;