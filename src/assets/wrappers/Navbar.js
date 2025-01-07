import styled from "styled-components";

const Nav = styled.nav`
  background-color: var(--background-color);
  padding: 1rem;

  .navCenter {
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 90%;
    margin: 0 auto;
  }
  .navText {
    font-size: 1.75rem;
    letter-spacing: 2px;
  }
  .navLinks {
    display: flex;
    column-gap: 0.5rem;
    font-size: 1.25rem;
  }
`;

export default Nav;
