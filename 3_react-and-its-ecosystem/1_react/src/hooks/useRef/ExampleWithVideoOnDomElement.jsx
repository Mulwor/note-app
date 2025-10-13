import { useRef, useState } from 'react';

// * В этом примере используется ссылка для вызова play() и pause() на <video>узле DOM.
export const WorkWithVideo = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const ref = useRef(null);

  function handleClick() {
    const nextIsPlaying = !isPlaying;
    setIsPlaying(!isPlaying);

    nextIsPlaying === true ? ref.current.play() : ref.current.pause();
  }

  return (
    <>
      <hr />
      <button onClick={handleClick}>{isPlaying ? 'Pause' : 'Play'}</button>
      <video
        width='250'
        ref={ref}
        onPlay={() => setIsPlaying(true)}
        onPause={() => setIsPlaying(false)}
      >
        <source
          src='https://interactive-examples.mdn.mozilla.net/media/cc0-videos/flower.mp4'
          type='video/mp4'
        />
      </video>
    </>
  );
};
