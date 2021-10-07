import React, { FC, useState } from 'react';
import Navigation from '../navigation/Navigation';
import { BurgerStyled, NavWrap } from './BurgerStyled';

const Burger: FC = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const isAuth = true;

  const onHandleClick = () => setIsOpen(!isOpen);

  return (
    <>
      <BurgerStyled isOpen={isOpen} onClick={onHandleClick}>
        <div />
        <div />
        <div />
      </BurgerStyled>
      <NavWrap isOpen={isOpen}>
        <Navigation onClick={onHandleClick} />
      </NavWrap>
    </>
  );
};

export default Burger;
