import { Link } from 'react-router-dom';
import styled from 'styled-components';

const CartLinkStyled = styled(Link)`
  @media (min-width: 768px) {
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 0 15px;
    background-color: transparent;
    border: 1px solid #424242;
    border-radius: 2px;
    transition: all 250ms cubic-bezier(0.4, 0, 0.2, 1);
    cursor: pointer;

    &:hover,
    &:focus {
      background-color: #424242;
      box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.15);
    }

    &:hover .cart-text,
    &:focus .cart-text {
      color: var(--grey-text);
    }
  }

  .cart-text {
    color: var(--light-text);
    @media (max-width: 767px) {
      display: none;
    }
  }

  .MuiBadge-badge {
    right: -4px;
    top: 6px;
  }
`;

export default CartLinkStyled;
