import React, {Component} from 'react';
import {StyleSheet, Image} from 'react-native';
import { Container, Content, Header, Left, Right, Icon, Title, Body } from 'native-base';
//import {createDrawerNavigator} from 'react-navigation';

export default class HeaderComponent extends Component {
  render() {
    return (
      <Header style={styles.header}>
      <Left>
          <Icon style={styles.icon} name='md-menu' onPress={() => this.props.navigation.openDrawer()} />
      </Left>
      <Right>
        <Title style={{marginRight: 10, marginTop: 0}}>MyRecipies</Title>
      </Right>
    </Header>
    );
  }
}


const styles = StyleSheet.create({
  header: {
    backgroundColor: '#4da6ff',
    height: 65
  },
  icon: {
    color: 'white',
    marginLeft: 10,
    fontSize: 35
  }
});