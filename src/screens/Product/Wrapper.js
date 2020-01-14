import styled from 'styled-components';

export default styled.div`
  height: 100%;
  font-size: 16px;
  padding-left: 152px;
  line-height: 40px;
  display: flex;
  flex-direction: column;

  .pattern {
    top: 90vh;
    position: absolute;
    height: 20vh;
    align-self: flex-end;
  }
  .section {
    margin-bottom: 20vh;
  }

  .top_section {
    padding-right: 158px;

    display: flex;
    height: 100vh;

    flex-direction: row;

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

  .bottom_section {
    padding-right: 158px;
    .gallery {
      display: flex;
      flex-direction: row;
      justify-content: space-between;

      .product_image {
        height: 400px;
        width: 30%;
        object-fit: cover;
        object-position: center;
      }

      .text {
        width: 30%;
      }
    }

    .outro {
      margin-top: 10vh;
      display: flex;
      flex-direction: row;
      justify-content: center;
    }
  }
`;
