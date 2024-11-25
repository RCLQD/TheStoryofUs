import { useEffect, useRef } from "react";
import Sounds from "../assets/music.json";

function Music({ onPlayMusic }) {
  const audioRef = useRef(null);

  useEffect(() => {
    const audioElement = audioRef.current;
  
    if (audioElement && onPlayMusic) {
      const playTimeout = setTimeout(() => {
        audioElement.play();
      }, 500); // Delay of 500ms
  
      return () => clearTimeout(playTimeout);
    }
  }, [onPlayMusic]);  

  return (
    <section className="w-full h-full flex flex-col justify-between p-5 font-poppins">
      <div>
        <h1 className="text-white font-bold text-3xl">{Sounds.Music[0].title}</h1>
        <h2 className="text-white font-semibold text-xl">{Sounds.Music[0].artist}</h2>
      </div>
      <div className="h-[25rem]">
        <p className="text-white text-lg font-medium mb-2">Lyrics</p>
        <div className="h-[90%] overflow-y-auto custom-scrollbar">
          {Sounds.Music[0].lyrics.split("\n\n").map((block, index) => (
            <div key={index}>
              {block.split("\n").map((line, lineIndex) => (
                <p key={lineIndex} className="text-[#fefefe] text-sm">
                  {line}
                </p>
              ))}
              <br />
            </div>
          ))}
        </div>
      </div>
      <div className="w-full flex justify-center">
        <audio
          ref={audioRef}
          src={Sounds.Music[0].audioUrl}
          controls
          loop
          preload="auto"
          className="h-11"
        >
          Your browser does not support the audio element.
        </audio>
      </div>
    </section>
  );
}

export default Music;