import { FC } from 'react';

import ImageDisplayer from 'react-image-displayer';

interface SampleCalculationImageProps {
  imageUrl?: string;
}

export const SampleCalculationImage: FC<SampleCalculationImageProps> = ({
  imageUrl,
}) => {
  return (
    <ImageDisplayer
      url={'samples/' + imageUrl!}
      enterAnimation={['blur', 3]}
      imageStyle={{
        borderTopLeftRadius: '9px',
        borderTopRightRadius: '9px',
      }}
      spinner={{
        color: 'var(--color2)',
        spinnerType: 'BeatLoader',
        size: '0.6rem',
      }}
    />
  );
};
