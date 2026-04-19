import { useEffect, useEffectEvent } from "react";

export function useDoubleClickFullscreen() {
  const toggleFullscreen = useEffectEvent(async () => {
    if (!document.fullscreenElement) {
      try {
        await document.documentElement.requestFullscreen();
      } catch (error) {
        console.error("Unable to enter fullscreen mode.", error);
      }

      return;
    }

    await document.exitFullscreen();
  });

  useEffect(() => {
    const handleDoubleClick = () => {
      void toggleFullscreen();
    };

    document.addEventListener("dblclick", handleDoubleClick);

    return () => {
      document.removeEventListener("dblclick", handleDoubleClick);
    };
  }, []);
}
