import { useState } from "react";
import heroImg from "./assets/hero.png";
import reactLogo from "./assets/react.svg";
import viteLogo from "./assets/vite.svg";
import "./App.css";

function App() {
  const [selectedCategory, setSelectedCategory] = useState("Termahal");

  return (
    <>
      <h1>Toko Kita</h1>
      <p>Kaos dan hoodie basic untuk sehari-hari</p>
      <hr />
      <div className="button-wrapper">
        <button
          className={selectedCategory === "Bawahan" ? "btn active" : "btn"}
          onClick={() => {
            setSelectedCategory("Bawahan");
          }}
        >
          Bawahan
        </button>
        <button
          className={selectedCategory === "Termurah" ? "btn active" : "btn"}
          onClick={() => {
            setSelectedCategory("Termurah");
          }}
        >
          Termurah
        </button>
        <button
          className={selectedCategory === "Termahal" ? "btn active" : "btn"}
          onClick={() => {
            setSelectedCategory("Termahal");
          }}
        >
          Termahal
        </button>
      </div>
    </>
  );
}

export default App;
