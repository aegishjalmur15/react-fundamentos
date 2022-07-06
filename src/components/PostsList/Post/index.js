import React from 'react';

import { Container } from './styles';

export default class Post extends React.Component{
  render(){

    const { title, description } = this.props;

    return (
      <Container>
        <h2>{title}</h2>
        <small>{description}</small>
      </Container>
    );
  }
}