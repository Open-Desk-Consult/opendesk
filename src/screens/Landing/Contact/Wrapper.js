import styled from 'styled-components';

export default styled.div`
  width: 100%;
  height: 100vh;

  .header {
    padding-top: 100px;
    padding-left: 152px;
    color: #646464;
    font-size: 13px;

    @media only screen and (max-width: 1350px) {
      padding-left: 0px;
    }
  }

  .content {
    padding-left: 152px;
    margin-top: 85px;
    font-size: 91px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    height: calc(100vh - 185px);

    @media only screen and (max-width: 1350px) {
      padding-left: 0px;
    }

    .main {
      display: flex;
      flex-direction: row;
      justify-content: space-between;

      .text {
        width: 30%;
        font-weight: bold;
        padding-right: 50px;

        @media only screen and (max-width: 900px) {
          width: 90%;
        }
      }

      .hero {
        height: 50vh;
        padding-right: 157px;
        @media only screen and (max-width: 1400px) {
          padding-right: 30px;
          width: 20vw;
          height: auto;
        }

        @media only screen and (max-width: 900px) {
          display: none;
        }
      }
    }
    .info {
      display: flex;
      flex-direction: column;
      align-self: flex-end;
      padding-right: 157px;
      text-align: end;
      padding-bottom: 80px;

      @media only screen and (max-width: 1350px) {
        padding-right: 30px;
      }

      .minor {
        font-size: 22px;
        text-decoration: underline;
      }

      .major {
        font-size: 100px;
        font-weight: bold;
      }
    }
  }
`;
