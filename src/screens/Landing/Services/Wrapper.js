import styled from 'styled-components';

export default styled.div`
  width: 100%;
  height: 100vh;

  .header {
    padding-top: 100px;
    padding-left: 152px;
    color: #646464;
    font-size: 13px;
  }

  .content {
    padding-left: 152px;
    margin-top: 85px;
    font-size: 35px;
    display: flex;
    flex-direction: row;
    .col {
      width: 38%;
      .col_header {
        margin-bottom: 77px;
      }
      .description {
        margin-bottom: 41px;
      }
      .features {
        color: #646464;
        font-size: 18px;
        .item {
          margin-bottom: 36px;
        }
      }
    }
    .col:nth-child(1) {
      margin-right: 100px;
    }
  }
`;
