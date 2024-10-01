import { FC, useState } from 'react';
import { CalculationForm } from '../../models/CalculationForm';
import { BaseButton, BaseCard, BaseWrapper } from 'binak-react-components';
import { DisplayInflation } from '../calculation/DisplayInflation';
import { numberToAmount } from '../../utils/utils';

interface LatestCalculalationItemProps {
  calculation: CalculationForm;
}

const LatestCalculalationItem: FC<LatestCalculalationItemProps> = ({
  calculation,
}) => {
  const [calculationInput, setCalculationInput] = useState<CalculationForm>();

  const calculate = () => {
    setCalculationInput(() => ({
      date: calculation.date,
      amount: numberToAmount(+calculation.amount),
    }));
  };

  return (
    <>
      <BaseCard style={{ margin: 0, width: '20rem' }}>
        <p
          style={{ fontWeight: 500 }}
        >{`${calculation.date} tarihindeki ${calculation.amount}TL'nin;`}</p>
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

export default LatestCalculalationItem;
