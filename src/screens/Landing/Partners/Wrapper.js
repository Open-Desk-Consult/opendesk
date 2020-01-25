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

    .title {
      margin-bottom: 20px;
    }

    .description {
      color: #646464;
      font-size: 18px;
    }

    .partners {
      width: calc(100%-40px);
      margin-top: 50px;
      padding: 40px 40px 40px 0px;

      display: flex;
      flex-direction: row;
      flex-wrap: wrap;
      .item {
        margin: 30px 20px 20px 0px;
        height: 60px;
        width: auto;
      }
    }
  }
`;
