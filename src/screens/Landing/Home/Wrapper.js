import styled from 'styled-components';

export default styled.div`
  height: 100vh;
  width: 100%;

  .content {
    padding-left: 152px;
    display: flex;
    flex-direction: row;
    padding-top: 30vh;
    font-size: 45.5px;

    @media only screen and (max-width: 1350px) {
      padding-left: 30px;
    }

    .text {
      width: 60%;

      @media only screen and (max-width: 1350px) {
        width: 95%;
      }
    }

    .hero_container {
      width: 40%;
      justify-content: flex-end;
      display: flex;
      padding-right: 20px;
      @media only screen and (max-width: 1350px) {
        display: none;
      }
      .hero {
        align-self: flex-end;
        height: 50vh;
      }
    }
  }
`;
