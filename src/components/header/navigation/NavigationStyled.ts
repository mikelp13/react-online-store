import styled from 'styled-components';

const NavigationList = styled.ul`
  @media (min-width: 768px) {
    display: flex;
  }

  .nav-item {
    cursor: pointer;

    @media (min-width: 768px) {
      &:not(:last-child) {
        margin-right: 30px;
      }
    }
  }

  .nav-link {
    display: block;
    position: relative;
    padding-top: 20px;
    padding-bottom: 20px;
    color: #9e9e9e;
    line-height: 1.3;
    transition: color 250ms cubic-bezier(0.4, 0, 0.2, 1);

    &::after {
      content: '';
      display: flex;
      position: absolute;
      bottom: -1px;
      width: 100%;
      height: 4px;
      background-color: #2196f3;
      border-radius: 1px;
      opacity: 0;
      transition: opacity 250ms cubic-bezier(0.4, 0, 0.2, 1);
    }

    &:hover,
    &:focus {
      color: var(--light-text);
    }
  }

  .active-link {
    color: var(--light-text);

    &::after {
      opacity: 1;
    }
  }
  .nav-item:hover .nav-link::after {
    opacity: 1;
  }
`;

export default NavigationList;
