import arvore from "./assets/1735077838584.json";
import coracao from "./assets/1735078132849.json";
import "./App.css";
import Lottie from "react-lottie";
import { useState } from "react";
function App() {
  const [modal, setModal] = useState(false);
  return (
    <>
      <div className="div1">
        <div
          onMouseDown={() => {
            setModal((state) => !state);
          }}
          className="button"
        ></div>
        <Lottie
          options={{
            animationData: coracao,
            loop: true,
            autoplay: true,
          }}
          isPaused={false}
        />
        <h1 className="click-me">click me</h1>
      </div>
      <div className={modal ? "modal-aberto" : "modal-fechado"}>
        <h1>Feliz Natal</h1>
        <h2>Eu te Amo, Relâmpago My Queen</h2>
        <Lottie
          options={{
            animationData: arvore,
            loop: true,
            autoplay: true,
          }}
          height={400}
          width={400}
          isPaused={false}
        />
      </div>
    </>
  );
}

export default App;
