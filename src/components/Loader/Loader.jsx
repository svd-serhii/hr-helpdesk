import { RotatingLines } from 'react-loader-spinner';
import { LoaderContainer } from './Loader.styled';

export const Loader = () => {
  return (
    <LoaderContainer>
      <RotatingLines
        strokeColor="#bfbfbf"
        strokeWidth="5"
        animationDuration="0.75"
        width="30"
        visible={true}
      />
    </LoaderContainer>
  );
};
