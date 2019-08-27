import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, Image} from 'react-native';
import { Container, Content, Header, Left, Right, Icon, Title, Body, CardItem, Card, Thumbnail, Accordion } from 'native-base';
//import {createDrawerNavigator} from 'react-navigation';

export default class HomeScreen extends Component {
  render() {
    return(
      <View style={{
        flexDirection: "row",
        padding: 10,
        justifyContent: "space-between",
        alignItems: "center" ,
        backgroundColor: "#cce6ff" }}>

      <Text style={{ fontWeight: "600" }}>
          {" "}{item.title}

      </Text>
        {expanded ? <Icon style={{ fontSize: 18 }} name="remove-circle" /> : <Icon style={{ fontSize: 18 }} name="add-circle" />}
      </View>
    );
  }
  _renderContent(item) {
    return (
      <Text
        style={{
          backgroundColor: "#fff",
          padding: 15,
          fontStyle: "italic",
        }}
      >
        {item.content}
      </Text>
    );
  }
  render() {
    return (
      <Container>
        <Header style={styles.header}>
            <Left>
                <Icon style={styles.icon} name='md-menu' onPress={() => this.props.navigation.openDrawer()} />
            </Left>
            <Right>
              <Title style={{marginRight: 10, marginTop: 0}}>MyRecipes</Title>
            </Right>
        </Header>
        <Content padder style={{ backgroundColor: "#fff" }}>

        <Text style={{fontSize:25, marginTop: 20, marginBottom: 20, marginLeft: 100}}>Lunch Recipes</Text>

        <Card style={{flex: 0}}>
            <CardItem>
              <Left>
                <Body>
                  <Text style={{fontSize: 21}}>The Best Chicken Fried Steak</Text>
                </Body>
              </Left>
            </CardItem>
            <CardItem>
              <Body>
                <Image source={{uri: 'https://images.media-allrecipes.com/userphotos/720x405/5179074.jpg'}} style={{height: 200, width: 350, flex: 1}}/>
              </Body>
            </CardItem>

            <Text style={{fontSize: 20, marginLeft: 140, marginBottom: 10}}>Directions</Text>
            <Accordion
              dataArray = {dataArray}
              animation = {true}
              expanded = {true}
              renderHeader = {this._renderHeader}
              renderContent = {this._renderContent}

              icon="add" expandedIcon="remove"
              iconStyle={{ color: "#000" }}
              expandedIconStyle={{ color: "#000" }}
            />
          </Card>
            
        </Content>
      </Container>
    );
  }
}

const dataArray = [
{ title: "Step One", content: "Pound the steaks to about 1/4-inch thickness. Place 2 cups of flour in a shallow bowl. Stir together the baking powder, baking soda, pepper, and salt in a separate shallow bowl; stir in the buttermilk, egg, Tabasco Sauce, and garlic. Dredge each steak first in the flour, then in the batter, and again in the flour. Pat the flour onto the surface of each steak so they are completely coated with dry flour." },
{ title: "Step Two", content: "Heat the shortening in a deep cast-iron skillet to 325 degrees F (165 degrees C). Fry the steaks until evenly golden brown, 3 to 5 minutes per side. Place fried steaks on a plate with paper towels to drain. Drain the fat from the skillet, reserving 1/4 cup of the liquid and as much of the solid remnants as possible." },
{title: "Step Three", content: "Return the skillet to medium-low heat with the reserved oil. Whisk the remaining flour into the oil. Scrape the bottom of the pan with a spatula to release solids into the gravy. Stir in the milk, raise the heat to medium, and bring the gravy to a simmer, cook until thick, 6 to 7 minutes. Season with kosher salt and pepper. Spoon the gravy over the steaks to serve."} ]


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