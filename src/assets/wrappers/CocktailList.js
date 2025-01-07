import styled from "styled-components";

const Wrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  row-gap: 3rem;
  .drink {
    display: flex;
    position: relative;
    column-gap: 2rem;
    align-items: top;
    justify-content: left;
    width: 100%;
    padding: 1rem;
  }
  .drink:hover {
    background-color: var(--background-color);
    cursor: pointer;
  }
  .drink::after {
    content: "";
    position: absolute;
    bottom: -0.2rem;
    left: 0;
    width: 100%;
    height: 0.1rem;
    background-color: #fff;
  }
  .drink img {
    object-fit: cover;
    border-radius: 8px;
  }

  .drink:last-child::after {
    display: none;
  }
`;

export default Wrapper;
