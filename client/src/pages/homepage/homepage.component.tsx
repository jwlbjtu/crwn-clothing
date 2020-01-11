import React from 'react';

import { HomePageContainer } from './homepage.styles';
import Directory from '../../components/directoty/directory.component';
// import './homepage.styles.scss';

const HomePage: React.FC = () => (
  <HomePageContainer>
    <Directory />
  </HomePageContainer>
);

export default HomePage;
