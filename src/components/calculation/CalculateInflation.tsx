import { FC, useState } from 'react';
import {
  BaseButton,
  BaseCard,
  BaseFormInput,
  BaseWrapper,
} from 'binak-react-components';
import { useForm } from 'react-hook-form';
import { amountToNumber, getFiveYearsAgo } from '../../utils/utils';
import { DisplayInflation } from './DisplayInflation';
import { CalculationForm } from '../../models/CalculationForm';

const CalculateInflation: FC = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<CalculationForm>({
    mode: 'onTouched',
    defaultValues: { amount: '', date: getFiveYearsAgo() },
  });

  const [calculationInput, setCalculationInput] = useState<CalculationForm>();

  const onSubmit = (data: CalculationForm) => {
    setCalculationInput(() => data);
  };

  return (
    <>
      <BaseCard style={{ margin: '0', width: '30rem' }}>
        <form onSubmit={handleSubmit(onSubmit)}>
          <BaseFormInput
            id="date"
            label={'Tarih'}
            error={errors.date}
            register={register('date', {
              validate: (value) => {
                const _date = value.split('.');

                if (_date.length !== 3) {
                  return 'Lütfen geçerli bir tarih değeri giriniz (1.12.2012 gibi)';
                }

                const day = +_date[0];
                const month = +_date[1];
                const year = +_date[2];

                const date = new Date(year, month - 1, day);

                if (date >= new Date()) {
                  return 'Lütfen bugünden daha önce bir tarih giriniz';
                } else if (date < new Date(1950, 1, 1)) {
                  return 'Lütfen 1950 yılından itibaren bir tarih giriniz';
                }
              },
            })}
            errorMessage={errors.date?.message}
          />
          <BaseFormInput
            id="amount"
            label={'Tutar'}
            error={errors.amount}
            register={register('amount', {
              pattern: {
                value: /^^[+-]?[0-9]{1,3}(?:\.?[0-9]{3})*(?:,[0-9]{1,2})?$/i,
                message: 'Lütfen geçerli bir tutar giriniz',
              },
              validate: (value) => +amountToNumber(value) > 0,
            })}
            errorMessage={'Lütfen geçerli bir tutar giriniz'}
          />

          <BaseWrapper mode={['align-right']}>
            <BaseButton type="submit">{'Hesapla'}</BaseButton>
          </BaseWrapper>
        </form>
      </BaseCard>
      <DisplayInflation
        calculationInput={calculationInput}
        onClose={() => setCalculationInput(undefined)}
      />
    </>
  );
};
export default CalculateInflation;
