import { BaseButton, BaseCard, BaseWrapper } from 'binak-react-components';
import { FC, useState } from 'react';
import { CalculationForm } from '../../models/CalculationForm';
import { DisplayInflation } from '../calculation/DisplayInflation';

import { SampleCalculationVideo } from './SampleCalculationVideo';
import { SampleCalculationImage } from './SampleCalculationImage';

interface SampleCalculationProps {
  label: string;
  videoId?: string;
  imageUrl?: string;
  parameters: CalculationForm;
}

export const SampleCalculation: FC<SampleCalculationProps> = ({
  label,
  videoId,
  imageUrl,
  parameters,
}) => {
  const [calculationInput, setCalculationInput] = useState<CalculationForm>();

  const calculate = () => {
    setCalculationInput(() => parameters);
  };

  return (
    <>
      <BaseCard style={{ margin: '0', width: '30rem', padding: '0.6rem' }}>
        {videoId && <SampleCalculationVideo videoId={videoId} />}
        {imageUrl && <SampleCalculationImage imageUrl={imageUrl} />}
        <p style={{ fontWeight: 500 }}>{label + ';'}</p>
        <BaseWrapper mode={['align-right']}>
          <BaseButton
            mode="flat"
            style={{ fontWeight: 500 }}
            onClick={calculate}
          >
            Bugünkü <span style={{ fontWeight: 600 }}>karşılığı ne?</span>
          </BaseButton>
        </BaseWrapper>
      </BaseCard>
      <DisplayInflation
        calculationInput={calculationInput}
        onClose={() => setCalculationInput(undefined)}
      />
    </>
  );
};
