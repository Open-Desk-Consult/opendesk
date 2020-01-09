import styled from 'styled-components';

export default styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 100vh;
  width: 200px;
  padding-left: 60px;
  position: fixed;

  .logo {
    height: 70px;
    width: 90px;
    margin-top: 70px;

    transition: all ease-in-out 300ms;

    :hover {
      transform: scale(1.05);
      cursor: pointer;
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
