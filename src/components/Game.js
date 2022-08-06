import "./Game.css";

const Game = () => {
    return (
        <div className="game">
            <p className="points">
                <span>Pontuação: 000</span>
            </p>
            <h1>Adivinhe a palavra:</h1>
            <h3 className="tip">Dica sobre a palavra: categoria</h3>
            <p>Você ainda tem xx tentativas(s).</p>
            <div className="wordContainer">
                <span>A</span>
            </div>
            <div className="letterContainer">
                <p>Tente adivinhe a letra da palavra:</p>
                <form>
                    <input type="text" name="letter" maxLength="1" />
                    <button>Jogar!</button>
                </form>
            </div>
            <div className="wrongLetterContainer">
                <p>Letras já utilizadas:</p>
                <span>a, </span>
                <span>b, </span>
            </div>
        </div>
    );
};

export default Game;
