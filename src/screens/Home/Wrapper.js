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

    .text {
      width: 60%;
    }

    .hero_container {
      width: 40%;
      justify-content: flex-end;
      display: flex;
      .hero {
        align-self: flex-end;
        height: 50vh;
      }
    }
  }
`;
