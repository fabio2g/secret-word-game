import { useState } from "react";
import { wordsList } from "./data/words";

import "./App.css";

import StartScreen from "./components/StartScreen";
import Game from "./components/Game";
import GameOver from "./components/GameOver";

const stages = [
    { id: 1, name: "start" },
    { id: 2, name: "game" },
    { id: 3, name: "end" },
];

function App() {
    const [gameStage, setGameStage] = useState(stages[0].name);
    const [words] = useState(wordsList);
    const [category, setCategory] = useState("");
    const [word, setWord] = useState("");
    const [letters, setLetters] = useState([]);

    const [correctLetters, setCorrectLetters] = useState([]);
    const [wrongLetters, setWrongLetters] = useState([]);
    const [attempts, setAttempts] = useState(3);
    const [score, setScore] = useState(0);

    const selectCategoryAndWord = () => {
        // Seleciona a categoria
        const listCategory = Object.keys(words);
        const category =
            listCategory[Math.floor(Math.random() * listCategory.length)];
        // Seleciona uma palavra em categoria
        const word =
            words[category][Math.floor(Math.random() * words[category].length)];

        return { category, word };
    };

    const startGame = () => {
        const { category, word } = selectCategoryAndWord();

        let caracteres = word.split("");
        caracteres = caracteres.map((l) => l.toLowerCase());

        setCategory(category);
        setWord(word);
        setLetters(caracteres);
        setGameStage(stages[1].name);
    };

    const verifyLetters = (letter) => {
        const normalizeLetter = letter.toLowerCase();

        if (
            correctLetters.includes(normalizeLetter) ||
            wrongLetters.includes(normalizeLetter)
        ) {
            return;
        }

        if (letters.includes(normalizeLetter)) {
            setCorrectLetters((actualCorrectLetters) => [
                ...actualCorrectLetters,
                normalizeLetter,
            ]);
        } else {
            setWrongLetters((actualWrongLetters) => [
                ...actualWrongLetters,
                normalizeLetter,
            ]);
        }
    };

    const retryGame = () => {
        setGameStage(stages[0].name);
    };

    return (
        <div>
            {gameStage === "start" && <StartScreen startGame={startGame} />}
            {gameStage === "game" && (
                <Game
                    verifyLetters={verifyLetters}
                    category={category}
                    word={word}
                    letters={letters}
                    correctLetters={correctLetters}
                    wrongLetters={wrongLetters}
                    attempts={attempts}
                    score={score}
                />
            )}
            {gameStage === "end" && <GameOver retryGame={retryGame} />}
        </div>
    );
}

export default App;
