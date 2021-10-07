import styled from 'styled-components';

const HeaderStyled = styled.div`
  /* position: fixed; */
  width: 100%;
  background-color: var(--accent-color);
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.5);
  z-index: 100;

  .header-container {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  .logo {
    color: var(--light-text);
    font-weight: 600;
  }
`;

export default HeaderStyled;
