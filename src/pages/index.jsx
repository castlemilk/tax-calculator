import React from 'react';
import { injectGlobal } from 'styled-components';
import Header from '../components/Header/index';

injectGlobal`
  body {
    margin: 0;
    padding: 0;
    border: 0;
    outline: 0;
  }
`;

const IndexPage = () => (
  <Header />
);

export default IndexPage;
