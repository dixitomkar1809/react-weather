import React, { Component } from 'react';
import { Footer, FooterTab, Button, Text } from 'native-base';
export default class Appbar extends Component {
  render() {
    return (
        <Footer>
          <FooterTab>
            <Button active>
              <Text>Home</Text>
            </Button>
            <Button>
              <Text>Search</Text>
            </Button>
          </FooterTab>
        </Footer>
    //   </Container>
    );
  }
}