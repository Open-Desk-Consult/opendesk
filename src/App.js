import React from 'react';
import styled from 'styled-components';
import SideNav from './components/SideNav';

const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
`;

export default () => {
  return (
    <Wrapper>
      <SideNav />
      <div>App</div>
    </Wrapper>
  );
};
