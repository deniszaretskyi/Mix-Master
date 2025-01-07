import styled from "styled-components";

const Wrapper = styled.div`
  min-width: 60%;
  max-width: 25rem;
  margin: 0 auto 5rem;
  display: flex;
  justify-content: center;
  align-items: stretch;
  height: 2.75rem;

  input,
  button {
    border-color: transparent;
  }
  input {
    border-right: 0;
    height: 100%;
    min-width: 60%;
    max-width: 20rem;
    border-top-left-radius: 12px;
    border-bottom-left-radius: 12px;
    padding: 0.4rem 0.8rem;
    font-size: 1.2rem;
  }
  button {
    border-left: 0;
    width: 4rem;
    border-top-right-radius: 12px;
    border-bottom-right-radius: 12px;
    background-color: var(--white);
    font-size: 1.5rem;
    padding: 0;
    color: var(--accent2);
    height: 100%;
    line-height: 2.6rem;
  }
`;

export default Wrapper;
