import { useEffect } from "react";
import "./App.css";
import DigitalClock from "./DigitalClock";
import { Helmet } from "react-helmet-async";

function App() {
  useEffect(() => {
    const handleDoubleClick = () => {
      if (!document.fullscreenElement) {
        document.documentElement.requestFullscreen().catch((err) => {
          console.error(
            `Error attempting to enable full-screen mode: ${err.message} (${err.name})`
          );
        });
      } else {
        document.exitFullscreen();
      }
    };

    document.addEventListener("dblclick", handleDoubleClick);

    return () => {
      document.removeEventListener("dblclick", handleDoubleClick);
    };
  }, []);

  return (
    <>
      <Helmet>
        <title>Minimalist Digital Clock</title>
      </Helmet>
      <DigitalClock />
    </>
  );
}

export default App;
