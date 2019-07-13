import React, { Component } from 'react';

import moment from 'moment';

import api from '../../services/api';

import logo from '../../assets/logo.png';

import { Container, Form } from './styles';

import CompareList from '../../components/CompareList';

import GlobalStyle from '../../styles/global';

export default class Main extends Component {
  state = {
    loading: false,
    userError: false,
    userInput: '',
    users: [],
  };

  handleAddUser = async (e) => {
    e.preventDefault();

    this.setState({ loading: true });

    try {
      const { data: user } = await api.get(`/users/${this.state.userInput}`);

      // repository.lastCommit = moment(repository.pushed_at).fromNow();

      this.setState({
        userInput: '',
        users: [...this.state.users, user],
        userError: false,
      });
    } catch (err) {
      this.setState({ userError: true });
    } finally {
      this.setState({ loading: false });
    }
  };

  render() {
    return (
      <Container>
        <GlobalStyle />
        <img src={logo} alt="Github Status" />

        <Form withError={this.state.userError} onSubmit={this.handleAddUser}>
          <input
            type="text"
            placeholder="usuário"
            value={this.state.userInput}
            onChange={e => this.setState({ userInput: e.target.value })}
          />
          <button type="submit">
            {' '}
            {this.state.loading ? <i className="fa fa-spinner fa-pulse" /> : 'OK'}
            {' '}
          </button>
          {' '}
        </Form>

        <CompareList users={this.state.users} />
      </Container>
    );
  }
}
