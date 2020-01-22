import styled from 'styled-components';

export default styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 100vh;
  width: 200px;
  padding-left: 60px;
  position: fixed;

  .top {
    margin-top: 70px;
    display: flex;
    flex-direction: column;

    .logo {
      height: auto;
      width: 90px;
      margin-bottom: 30px;
      transition: all ease-in-out 300ms;

      :hover {
        transform: scale(1.05);
        cursor: pointer;
      }
    }
  }

  .menu {
    margin-bottom: 50px;

    .item {
      margin-bottom: 20px;
      font-size: 15px;
      transition: all ease-in-out 300ms;

      :hover {
        transform: scale(1.05);
        cursor: pointer;
      }
    }
  }
`;
