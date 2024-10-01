import { BaseWrapper } from 'binak-react-components';
import { FC, useCallback, useEffect, useState } from 'react';
import { CalculationForm } from '../../models/CalculationForm';
import LatestCalculalationItem from './LatestCalculalationItem';
import urls from '../../utils/urls';
import { useLoader } from '../../store/loader';
import { useError } from '../../store/error';

const ListLatestCalculalations: FC = () => {
  const setLoading = useLoader((state) => state.setLoading);
  const [calculations, setCalculations] = useState<CalculationForm[]>();
  const setError = useError((state) => state.setError);

  const fetchData = useCallback(async () => {
    setLoading(true);

    try {
      const response = await fetch(urls.latest);
      const responseData = await response.json();

      if (response.status === 200) {
        setCalculations(responseData);
      } else {
        throw new Error(responseData.message);
      }
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
    } catch (err: any) {
      setError(err.message);
    }

    setLoading(false);
  }, [setLoading, setError]);

  useEffect(() => {
    fetchData();
  }, [fetchData]);

  return (
    <>
      <BaseWrapper
        style={{
          display: 'flex',
          margin: 'auto',
          justifyContent: 'center',
          flexWrap: 'wrap',
          width: '80rem',
          maxWidth: '90%',
        }}
      >
        {calculations?.map((calculation) => (
          <LatestCalculalationItem calculation={calculation} />
        ))}
      </BaseWrapper>
    </>
  );
};

export default ListLatestCalculalations;
