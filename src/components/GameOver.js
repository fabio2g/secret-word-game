const GameOver = ({ retryGame }) => {
    return (
        <div>
            GameOver
            <button onClick={retryGame}>Retry</button>
        </div>
    );
};

export default GameOver;
