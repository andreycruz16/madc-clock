import { Helmet } from "react-helmet-async";
import { HomePage } from "../pages/home/HomePage";
import { useDoubleClickFullscreen } from "../shared/hooks/useDoubleClickFullscreen";

export function App() {
  useDoubleClickFullscreen();

  return (
    <>
      <Helmet>
        <title>Minimalist Digital Clock</title>
        <meta
          name="description"
          content="A distraction-free digital clock with fullscreen and date toggle support."
        />
      </Helmet>
      <HomePage />
    </>
  );
}
