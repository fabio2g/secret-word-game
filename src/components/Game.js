import { useRef, useState } from "react";
import "./Game.css";

const Game = ({
    verifyLetters,
    category,
    word,
    letters,
    correctLetters,
    wrongLetters,
    attempts,
    score,
}) => {
    const [letter, setLetter] = useState("");
    const inputRef = useRef(null);
    const handleSubmit = (e) => {
        e.preventDefault();
        verifyLetters(letter);
        setLetter("");
        inputRef.current.focus();
    };

    return (
        <div className="game">
            <p className="points">
                <span>Pontuação: {score}</span>
            </p>
            <h1>Adivinhe a palavra:</h1>
            <h3 className="tip">
                Dica sobre a palavra: <span>{category}</span>
            </h3>
            <p>Você ainda tem {attempts} tentativas(s).</p>
            <div className="wordContainer">
                {letters.map((letter, i) =>
                    correctLetters.includes(letter) ? (
                        <span key={i} className="letter">
                            {letter}
                        </span>
                    ) : (
                        <span key={i} className="blankSquare"></span>
                    )
                )}
            </div>
            <div className="letterContainer">
                <p>Tente adivinhar a letra da palavra:</p>
                <form onSubmit={handleSubmit}>
                    <input
                        type="text"
                        name="letter"
                        maxLength="1"
                        required
                        pattern="[a-z à-ú A-Z À-Ú]"
                        title="Apenas letras de A - Z são válidas."
                        onChange={(e) => setLetter(e.target.value)}
                        value={letter}
                        ref={inputRef}
                    />
                    <button>Jogar!</button>
                </form>
            </div>
            <div className="wrongLetterContainer">
                <p>Letras já utilizadas:</p>
                {wrongLetters.map((letter, i) => (
                    <span key={i}>{letter}, </span>
                ))}
            </div>
        </div>
    );
};

export default Game;
