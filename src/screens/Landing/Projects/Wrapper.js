import styled from 'styled-components';

export default styled.div`
  width: calc(100vw - 200px);
  height: 100vh;
  display: flex;
  position: relative;
  justify-content: space-between;
  scroll-snap-align: start;
  cursor: url(
      https://res.cloudinary.com/devmarshall/image/upload/c_scale,
      q_100,
      w_50/v1578939716/Asset_4_4x_igkbbq.png
    ),
    auto;

  .main {
    width: 50%;
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
      margin-top: 15vh;
      font-size: 35px;
      @media only screen and (max-width: 1350px) {
        padding-left: 0px;
      }

      .intro {
        font-size: 35px;
        margin-bottom: 5vh;
        padding-right: 35px;
      }

      .intro-project {
        padding-right: 35px;
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
      justify-self: center;
      transition: all ease-in-out 400ms;

      :hover {
        cursor: pointer;
        transform: scale(1.03);
      }
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
