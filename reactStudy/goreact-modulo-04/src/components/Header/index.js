import React from 'react';

import { Container, Search, User } from './styles';

const Header = () => (
  <Container>
    <Search>
      <input placeholder="Search" />
    </Search>

    <User>
      <img src="https://avatars0.githubusercontent.com/u/36276734?v=4" alt="Avatar" />
      Matheus Alves
    </User>
  </Container>
);

export default Header;
