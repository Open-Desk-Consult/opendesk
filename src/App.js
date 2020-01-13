import React, { useState } from 'react';
import styled from 'styled-components';
import SideNav from './components/SideNav';
import Content from './screens';

const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
`;

export default () => {
  const [page, setPage] = useState('HOME');

  const routes = ['HOME', 'SERVICES', 'PROJECTS', 'CONTACT'];
  return (
    <Wrapper>
      <SideNav {...{ page }} />
      <Content className="content" {...{ setPage, routes }} />
    </Wrapper>
  );
};
