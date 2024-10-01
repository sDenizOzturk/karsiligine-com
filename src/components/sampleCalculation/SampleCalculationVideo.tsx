import { FC, useState } from 'react';
import YouTube, { YouTubeProps } from 'react-youtube';

import { ItemDisplayer } from 'react-image-displayer';

import classes from './videoWrapper.module.css';

interface SampleCalculationVideoProps {
  videoId?: string;
}

export const SampleCalculationVideo: FC<SampleCalculationVideoProps> = ({
  videoId,
}) => {
  const [loaded, setLoaded] = useState(false);
  const opts: YouTubeProps['opts'] = {
    width: '100%',
    height: 'auto',
  };

  const onReady = () => {
    setTimeout(() => {
      setLoaded(true);
    }, 1000);
  };

  return (
    <ItemDisplayer
      loadedInStyle={loaded}
      enterAnimation={['blur', 5]}
      spinner={{
        color: 'var(--color2)',
        spinnerType: 'BeatLoader',
        size: '0.6rem',
      }}
    >
      <div className={classes['videoWrapper']}>
        <YouTube videoId={videoId} opts={opts} onReady={onReady} />
      </div>
    </ItemDisplayer>
  );
};
