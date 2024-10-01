import { FC } from 'react';
import { BaseLoading } from 'binak-react-components';
import { useLoader } from '../../store/loader';

const Loading: FC = () => {
  const loading = useLoader((state) => state.loading)

  return <BaseLoading loading={loading} />;
};
export default Loading;
