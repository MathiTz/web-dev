import React from 'react';
import PropTypes from 'prop-types';

import { Container, Repository } from './style';

const CompareList = ({ users }) => (
  <Container>
    {users.map(user => (
      <Repository key={user.id}>
        <header>
          <img src={user.avatar_url} alt={user.login} />
          <strong>{user.name}</strong>
          <small>{user.login}</small>
        </header>

        <ul>
          <li>
            {user.public_repos}
            {' '}
            <small>repos</small>
          </li>
          {/* <li>
            {user.forks_count}
            {' '}
            <small>forks</small>
          </li>
          <li>
            {user.open_issues_count}
            {' '}
            <small>issues</small>
          </li>
          <li>
            {user.lastCommit}
            {' '}
            <small>last commit </small>
          </li> */}
        </ul>
      </Repository>
    ))}
  </Container>
);

CompareList.propTypes = {
  users: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number,
      name: PropTypes.string,
      owner: PropTypes.shape({
        login: PropTypes.string,
        avatar_url: PropTypes.string,
      }),
      stargazers_count: PropTypes.number,
      forks_count: PropTypes.number,
      open_issues_count: PropTypes.number,
      pushed_at: PropTypes.string,
    }),
  ).isRequired,
};

export default CompareList;
