const StartScreen = ({ startGame }) => {
    return (
        <div>
            <h2>Secret Word</h2>
            <p>Clique no botão para começar</p>
            <button onClick={startGame}>Começar o jogo</button>
        </div>
    );
};

export default StartScreen;
