import React, { FC } from 'react';
import Loader from 'react-loader-spinner';
import FallbackContainer from './SpinnerStyled';

const Spinner: FC = () => {
  return (
    <FallbackContainer>
      <Loader
        type="ThreeDots"
        color="var(--primary-color)"
        height={80}
        width={80}
      />
    </FallbackContainer>
  );
};

export default Spinner;
