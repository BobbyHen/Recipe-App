import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, Image} from 'react-native';
import { Container, Content, Header, Left, Right, Icon, Title, Body, CardItem, Card, Thumbnail, Accordion } from 'native-base';
//import {createDrawerNavigator} from 'react-navigation';

export default class Dessert extends Component {
  render() {
    return (
      <Container style={styles.container}>
        <Header style={styles.header}>
          <Left>
              <Icon style={styles.icon} name='md-menu' onPress={() => this.props.navigation.openDrawer()} />
          </Left>
          <Right>
            <Title style={{marginRight: 10, marginTop: 0}}>MyRecipes</Title>
          </Right>
        </Header>
        <View style={styles.screenContent}>
          <Text style={styles.welcome}>Dessert</Text>
        </View>
      </Container>
    );
  }
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    // justifyContent: 'center',
    // alignItems: 'center',
    backgroundColor: '#fff'
  },
  header: {
    backgroundColor: '#ff5a52',
    height: 65
  },
  icon: {
    color: 'white',
    marginLeft: 10,
    fontSize: 35
  },
  screenContent: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  }
});
