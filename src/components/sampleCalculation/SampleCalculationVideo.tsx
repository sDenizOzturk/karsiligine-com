"use client";
import { FC, useState } from "react";
import YouTube, { YouTubeProps } from "react-youtube";
import { ItemDisplayer } from "react-image-displayer";

interface SampleCalculationVideoProps {
  videoId?: string;
}

export const SampleCalculationVideo: FC<SampleCalculationVideoProps> = ({
  videoId,
}) => {
  const [loaded, setLoaded] = useState(false);

  // Use 100% x 100% to fill the responsive wrapper
  const opts: YouTubeProps["opts"] = { width: "100%", height: "100%" };

  const onReady = () => {
    setTimeout(() => setLoaded(true), 1000);
  };

  return (
    <ItemDisplayer
      loadedInStyle={loaded}
      enterAnimation={["blur", 5]}
      spinner={{
        color: "var(--color2)",
        spinnerType: "BeatLoader",
        size: "0.6rem",
      }}
    >
      <div className="videoWrapper">
        <YouTube videoId={videoId} opts={opts} onReady={onReady} />
      </div>

      <style jsx>{`
        .videoWrapper {
          position: relative;
          padding-bottom: 56.25%; /* 16:9 */
          height: 0;
          overflow: hidden;
          border-top-left-radius: 9px;
          border-top-right-radius: 9px;
        }
        .videoWrapper :global(iframe) {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          border: 0;
        }
      `}</style>
    </ItemDisplayer>
  );
};
