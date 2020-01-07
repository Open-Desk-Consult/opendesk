import styled from 'styled-components';

export default styled.div`
  display: flex;
  justify-content: center;
  align-content: center;
  width: 100%;
  height: 100vh;
  flex-direction: column;

  .content {
    width: 90%;
    font-size: 35px;
    display: flex;
    flex-direction: row;
    align-self: flex-end;
    .col {
      width: 50%;

      .heading {
        margin-bottom: 77px;
      }
      .description {
        width: 80%;
        margin-bottom: 41px;
      }
      .features {
        color: #999999;
        font-size: 18px;
        .item {
          margin-bottom: 36px;
        }
      }
    }
  }
`;
