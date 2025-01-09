import styled from "styled-components";

const Wrapper = styled.div`
  position: relative;
  img {
    width: 40%;
    max-width: 15rem;
    border-radius: 8px;
    position: relative;
  }
  .cocktailImgTitle {
    display: flex;
    column-gap: 2rem;
    justify-content: space-between;
    align-items: top;
  }

  .cocktailTitleInfo h2 {
    position: relative;
    font-size: 2.2rem;
    letter-spacing: 0.2rem;
    margin: 0 0 2rem;
  }

  .cocktailTitleInfo p {
    text-transform: capitalize;
    font-size: 1.2rem;
  }
  .measuresAndIngredients {
    display: grid;
    grid-template-columns: 1fr 1fr;
    justify-content: center;
  }
  .wrapper h4 {
    text-align: start;
    font-size: 1.5rem;
    letter-spacing: 2px;
    margin-bottom: 1.5rem;
  }
  .measuresAndIngredients p {
    font-size: 1.1rem;
    position: relative;
    margin-bottom: 0.4rem;
  }
  .instructions h4 {
    font-size: 1.7rem;
    margin-bottom: 1rem;
    letter-spacing: 2px;
  }
  .instructions p {
    font-size: 1.2rem;
    line-height: 1.5;
  }
  .cocktailImgTitle,
  .instructions,
  .wrapper {
    max-width: 40rem;
    margin: 0 auto 5rem;
    position: relative;
  }
  .cocktailImgTitle::after,
  .wrapper::after {
    content: "";
    width: 100%;
    height: 0.1rem;
    position: absolute;
    background-color: var(--accent1);
    bottom: -2.5rem;
  }
`;

export default Wrapper;
