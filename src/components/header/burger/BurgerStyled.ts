import styled from 'styled-components';

interface BurgerProps {
  isOpen: boolean;
}

export const BurgerStyled = styled.div`
  z-index: 10;
  width: 2rem;
  height: 2rem;
  display: none;
  @media (max-width: 767px) {
    display: flex;
    justify-content: space-around;
    flex-flow: column nowrap;
  }
  div {
    width: 2rem;
    height: 0.25rem;
    background-color: ${({ isOpen }: BurgerProps) =>
      isOpen ? '#BDBDBD' : '#BDBDBD'};
    border-radius: 10px;
    transform-origin: 1px 2px;
    transition: all 200ms linear;
    &:nth-child(1) {
      transform: ${({ isOpen }) => (isOpen ? 'rotate(45deg)' : 'rotate(0)')};
    }
    &:nth-child(2) {
      transform: ${({ isOpen }) =>
        isOpen ? 'translateX(-100%)' : 'translateX(0)'};
      opacity: ${({ isOpen }) => (isOpen ? 0 : 1)};
    }
    &:nth-child(3) {
      transform: ${({ isOpen }) => (isOpen ? 'rotate(-45deg)' : 'rotate(0)')};
    }
  }
`;

export const NavWrap = styled.nav`
  display: flex;

  @media (max-width: 767px) {
    justify-content: center;
    background-color: #747474;
    position: fixed;
    transform: ${({ isOpen }: BurgerProps) =>
      isOpen ? 'translateX(0)' : 'translateX(-100%)'};
    top: 56px;
    right: 0;
    height: 100vh;
    width: 100%;
    /* padding-top: 3.5rem; */
    transition: transform 250ms ease-in-out;
    padding: 20px;
    z-index: 100;
  }
  @media (min-width: 768px) {
    /* width: 100%; */
    /* justify-content: space-between; */
  }
`;
