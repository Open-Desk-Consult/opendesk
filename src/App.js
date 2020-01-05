import React from 'react';
import styled from 'styled-components';
import SideNav from './components/SideNav';
import Content from './screens';

const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
`;

export default () => {
  return (
    <Wrapper>
      <SideNav />
      <Content />
    </Wrapper>
  );
};
