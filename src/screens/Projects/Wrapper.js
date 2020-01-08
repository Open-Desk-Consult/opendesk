import styled from 'styled-components';

export default styled.div`
  width: calc(100vw - 200px);
  height: 100vh;

  display: flex;
      position: relative;

  scroll-snap-align: start;

  .main {
    width: 55%;
    .header {
      padding-top: 100px;
      padding-left: 152px;
      color: #646464;
      font-size: 13px;
    }

    .content {
      padding-left: 152px;
      margin-top: 69px;
      font-size: 35px;

      .intro {
        font-size: 35px;
        margin-bottom: 110px;
      }

      .intro-project {
        width: 450px;
      }

      .class-project {
        margin-top: 30px;
        font-size: 10px;
        color: #646464;
      }
    }
  }

  .project-main {
    width: 45%;
    background-color: #1d1d1b;
    display: flex;
    padding-left: 6vw;

    .project-img {
      height: auto;
      width: 80%;
      align-self: center;
    }

    .nav-counter {
      width: 200px;
      justify-content: space-between;
      display: flex;
      color: #ffffff;
      font-size: 20px;
      align-self: center;
      transform: rotate(90deg);
    }
  }
`;
