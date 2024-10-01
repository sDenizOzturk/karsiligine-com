import { BaseErrorModal } from 'binak-react-components';
import { FC } from 'react';
import { useNavigate } from 'react-router-dom';

const NotFoundView: FC = () => {
  const navigate = useNavigate();
  return (
    <>
      <BaseErrorModal
        title="Bir hata meydana geldi!"
        error=" "
        onClose={() => navigate(-1)}
        okayButton="Tamam"
      />
    </>
  );
};
export default NotFoundView;
