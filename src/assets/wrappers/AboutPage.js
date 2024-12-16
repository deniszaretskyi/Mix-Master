import styled from "styled-components";

const Wrapper = styled.div`
  padding: 2rem 1.25rem 0;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  row-gap: 2rem;
  h3 {
    font-size: 1.75rem;
    margin-bottom: 2rem;
  }
  p {
    font-size: 1.15rem;
    line-height: 1.3;
  }
  @media (min-width: 768px) {
    display: grid;
    grid-template-columns: 1fr 1fr;
    justify-items: center;
    align-items: center;
    padding: 6rem 3rem 0;
    img {
      width: 100%;
      max-width: 400px;
    }
  }
`;

export default Wrapper;
