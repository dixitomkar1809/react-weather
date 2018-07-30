import React, { Component } from 'react';
import { Container, Header, Content, Input, Item } from 'native-base';

export default class Appbar extends Component {
  render() {
    return (
      <Container>
        <Header />
        <Content>
          <Item regular>
            <Input placeholder='Type City Name ...' />
          </Item>
        </Content>
      </Container>
    );
  }
}