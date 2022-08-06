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

    // Seleciona a categoria
    const listCategory = Object.keys(words);
    const category =
        listCategory[Math.floor(Math.random() * listCategory.length)];
    // Seleciona uma palavra em categoria
    const word =
        words[category][Math.floor(Math.random() * words[category].length)];

    // Set do estados do Jogo
    const startGame = () => {
        console.log(category);
        console.log(word);
        setGameStage(stages[1].name);
    };

    const verifyLetters = () => {
        setGameStage(stages[2].name);
    };

    const retryGame = () => {
        setGameStage(stages[0].name);
    };

    return (
        <div>
            {gameStage === "start" && <StartScreen startGame={startGame} />}
            {gameStage === "game" && <Game verifyLetters={verifyLetters} />}
            {gameStage === "end" && <GameOver retryGame={retryGame} />}
        </div>
    );
}

export default App;
