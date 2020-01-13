import styled from 'styled-components';

export default styled.div`
  height: 100%;
  font-size: 16px;
  padding-left: 152px;

  .section {
    margin-bottom: 10vh;
  }

  .top_section {
    display: flex;
    height: 100vh;

    flex-display: row;

    justify-content: space-between;
    .content {
      width: 37.5%;
      padding-top: 20vh;
      .header {
        font-weight: bold;
        font-size: 28px;
        margin-bottom: 85px;
      }
      .text {
        line-height: 40px;
      }
    }

    .product_image {
      width: 45%;
      height: 100vh;
      object-fit: cover;
      object-position: center;
    }
  }
`;
