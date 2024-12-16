import styled from "styled-components";

const Wrapper = styled.div`
  width: 90%;
  display: flex;
  flex-direction: column;
  justify-items: center;
  align-items: center;
  row-gap: 1rem;
  padding: 5rem 2rem;
  margin: 0 auto;
  h2 {
    font-size: 3rem;
  }
  p {
    font-size: 1.1rem;
    color: #7b7b7b;
  }
  img {
    width: 100%;
    object-fit: cover;
    max-width: 700px;
  }
`;

export default Wrapper;
