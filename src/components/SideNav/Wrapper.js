import styled from 'styled-components';

export default styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 100vh;
  width: 200px;
  padding-left: 60px;

  .logo {
    height: 70px;
    width: 90px;
    margin-top: 70px;
  }

  .menu {
    margin-bottom: 50px;

    .item {
      margin-bottom: 20px;
      font-size: 10px;
      transition: all ease-in-out 300ms;

      :hover {
        transform: scale(1.05);
        cursor: pointer;
      }
    }
  }
`;
