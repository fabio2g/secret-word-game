import { useState } from "react";
import { wordsList } from "./data/words";
import "./App.css";
import SecretWord from "./components/SecretWord";

const stages = [
    { id: 1, name: "start" },
    { id: 2, name: "game" },
    { id: 3, name: "end" },
];

function App() {
    const [gameStage, setGameStage] = useState(stages[0].name);
    const [words] = useState(wordsList);

    return <div className="App">{gameStage === "start" && <SecretWord />}</div>;
}

export default App;
