import { CSSProperties, FC } from 'react';
import ViewWrapper from '../components/layout/ViewWrapper';
import { BaseCard, BaseWrapper } from 'binak-react-components';

const Contribute: FC = () => {
  const stackProps: { style: CSSProperties } = {
    style: { fontStyle: 'italic', margin: '0' },
  };

  const frontendStack = [
    'React',
    'TypeScript',
    'Framer Motion',
    'React Youtube',
    'React Hook Form',
    'Zustand',
    'Bınak React Components',
    'React Image Displayer',
  ];
  const backendStack = ['Node', 'Express', 'TypeScript', 'Fast XML Parser'];

  return (
    <ViewWrapper>
      <BaseWrapper
        style={{ minHeight: '60vh', padding: '1rem' }}
        mode={['vertical-center']}
      >
        <BaseCard style={{ width: '20rem', maxWidth: '80%' }}>
          <p style={{ margin: '0 0 0.2rem 0', textAlign: 'center' }}>
            <strong>Karşılığı ne</strong> bir açık kaynak projedir.
          </p>

          <BaseWrapper
            style={{
              width: '100%',
            }}
          >
            <BaseWrapper>
              <BaseWrapper style={{ textAlign: 'center' }}>
                <a href="https://github.com/sDenizOzturk/karsiligine-com">
                  Frontend
                </a>
                {frontendStack.map((tech) => (
                  <p {...stackProps}>{tech}</p>
                ))}
              </BaseWrapper>
            </BaseWrapper>
            <BaseWrapper>
              <BaseWrapper style={{ textAlign: 'center' }}>
                <a href="https://github.com/sDenizOzturk/karsiligine-api">
                  Backend
                </a>
                {backendStack.map((tech) => (
                  <p {...stackProps}>{tech}</p>
                ))}
              </BaseWrapper>
            </BaseWrapper>
          </BaseWrapper>
        </BaseCard>
      </BaseWrapper>
    </ViewWrapper>
  );
};

export default Contribute;
