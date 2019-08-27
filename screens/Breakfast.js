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

        <Text style={{fontSize:25, marginTop: 20, marginBottom: 20, marginLeft: 85}}>Breakfast Recipes</Text>

        <Card style={{flex: 0}}>
            <CardItem>
              <Left>
                <Body>
                  <Text style={{fontSize: 21}}>On-the-Farm Scrambled Eggs</Text>
                </Body>
              </Left>
            </CardItem>
            <CardItem>
              <Body>
                <Image source={{uri: 'https://images.media-allrecipes.com/userphotos/720x405/4521371.jpg'}} style={{height: 200, width: 350, flex: 1}}/>
              </Body>
            </CardItem>

            <Text style={{fontSize: 20, marginLeft: 140, marginBottom: 10}}>Directions</Text>
            <Accordion
              dataArray = {firstRecipeArray}
              animation = {true}
              expanded = {true}
              renderHeader = {this._renderHeader}
              renderContent = {this._renderContent}

              icon="add" expandedIcon="remove"
              iconStyle={{ color: "#000" }}
              expandedIconStyle={{ color: "#000" }}
            />
          </Card>

          <Card style={{flex: 0}}>
            <CardItem>
              <Left>
                <Body>
                  <Text style={{fontSize: 21}}>On-the-Farm Scrambled Eggs</Text>
                </Body>
              </Left>
            </CardItem>
            <CardItem>
              <Body>
                <Image source={{uri: 'https://imagesvc.meredithcorp.io/v3/mm/image?url=https%3A%2F%2Fimages.media-allrecipes.com%2Fuserphotos%2F4306820.jpg&w=595&h=595&c=sc&poi=face&q=85'}} style={{height: 200, width: 350, flex: 1}}/>
              </Body>
            </CardItem>

            <Text style={{fontSize: 20, marginLeft: 140, marginBottom: 10}}>Directions</Text>
            <Accordion
              dataArray = {secondRecipeArray}
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

const firstRecipeArray = [
{ title: "Step One", content: "Whisk eggs, half-and-half, salt, and pepper together in a bowl. Whisk in goat cheese and chives." },
{ title: "Step Two", content: "Melt butter in a skillet over medium-high heat. Pour in egg mixture; cook, stirring occasionally, until set, about 5 minutes. Transfer to serving plates; draw a line down each plate with sriracha sauce." }]

const secondRecipeArray = [
  { title: "Step One", content: "Preheat a large, heavy skillet over medium-high heat. Add 2 tablespoons oil. Break tofu apart over skillet into bite-size pieces, sprinkle with salt and pepper, then cook, stirring frequently with a thin metal spatula, until liquid cooks out and tofu browns, about 10 minutes. (If you notice liquid collecting in pan, increase heat to evaporate water.) Be sure to get under the tofu when you stir, scraping the bottom of the pan where the good, crispy stuff is and keeping it from sticking." },
  { title: "Step Two", content: "Add onion and garlic powders, turmeric, juice, and remaining tablespoon oil and toss to coat. Cook 5 minutes more." },
  { title: "Step Three", content: "Preheat a heavy-bottomed saucepan over medium-high heat. Add oil. Cook onion and jalapenos with a pinch of salt, stirring, until translucent, about 5 minutes, Add garlic and cook, stirring, until fragrant, about 30 seconds. Add tomatoes, cumin, and remaining salt, and cook, stirring, until tomatoes become saucy, about 5 minutes. Add cilantro and lemon juice. Let cilantro wilt in. Add beans and heat through, stirring occasionally, about 2 minutes. Taste for salt and seasoning." },
  { title: "Step Four", content: "Spoon some hash browns into each bowl, followed by a scoop of beans and a scoop of scramble. Top with avocado, a squeeze of fresh lemon juice, and a sprinkle of cilantro. Serve with hot sauce." }]

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