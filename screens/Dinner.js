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

        <Text style={{fontSize: 25, marginTop: 20, marginBottom: 20, marginLeft: 100}}>Dinner Recipes</Text>

        <Card style={{flex: 0}}>
            <CardItem>
              <Left>
                <Body>
                  <Text style={{fontSize: 21}}>World's Best Lasagna</Text>
                </Body>
              </Left>
            </CardItem>
            <CardItem>
              <Body>
                <Image source={{uri: 'https://images.media-allrecipes.com/userphotos/720x405/3359675.jpg'}} style={{height: 200, width: 350, flex: 1}}/>
              </Body>
            </CardItem>

            <Text style={{fontSize: 15, marginLeft: 150, marginBottom: 10}}>Directions</Text>
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
                  <Text style={{fontSize: 21}}>Grilled Salmon</Text>
                </Body>
              </Left>
            </CardItem>
            <CardItem>
              <Body>
                <Image source={{uri: 'https://images.media-allrecipes.com/userphotos/720x405/800839.jpg'}} style={{height: 200, width: 350, flex: 1}}/>
              </Body>
            </CardItem>

            <Text style={{fontSize: 15, marginLeft: 150, marginBottom: 10}}>Directions</Text>
            <Accordion
              dataArray = {secondtRecipeArray}
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
{ title: "Step One", content: "In a Dutch oven, cook sausage, ground beef, onion, and garlic over medium heat until well browned. Stir in crushed tomatoes, tomato paste, tomato sauce, and water. Season with sugar, basil, fennel seeds, Italian seasoning, 1 tablespoon salt, pepper, and 2 tablespoons parsley. Simmer, covered, for about 1 1/2 hours, stirring occasionally." },
{ title: "Step Two", content: "Bring a large pot of lightly salted water to a boil. Cook lasagna noodles in boiling water for 8 to 10 minutes. Drain noodles, and rinse with cold water. In a mixing bowl, combine ricotta cheese with egg, remaining parsley, and 1/2 teaspoon salt." },
{ title: "Step Three", content: "Preheat oven to 375 degrees F (190 degrees C)." },
{ title: "Step Four", content: "To assemble, spread 1 1/2 cups of meat sauce in the bottom of a 9x13 inch baking dish. Arrange 6 noodles lengthwise over meat sauce. Spread with one half of the ricotta cheese mixture. Top with a third of mozzarella cheese slices. Spoon 1 1/2 cups meat sauce over mozzarella, and sprinkle with 1/4 cup Parmesan cheese. Repeat layers, and top with remaining mozzarella and Parmesan cheese. Cover with foil: to prevent sticking, either spray foil with cooking spray, or make sure the foil does not touch the cheese." },
{ title: "Step Five", content: "Bake in preheated oven for 25 minutes. Remove foil, and bake an additional 25 minutes. Cool for 15 minutes before serving." }]

const secondtRecipeArray = [
  { title: "Step One", content: "Season salmon fillets with lemon pepper, garlic powder, and salt." },
  { title: "Step Two", content: "In a small bowl, stir together soy sauce, brown sugar, water, and vegetable oil until sugar is dissolved. Place fish in a large resealable plastic bag with the soy sauce mixture, seal, and turn to coat. Refrigerate for at least 2 hours." },
  { title: "Step Three", content: "Preheat oven to 375 degrees F (190 degrees C)." },
  { title: "Step Four", content: "Preheat grill for medium heat." },
  { title: "Step Five", content: "Lightly oil grill grate. Place salmon on the preheated grill, and discard marinade. Cook salmon for 6 to 8 minutes per side, or until the fish flakes easily with a fork." }]


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
    justifyContent: 'center',
    textAlign: 'center'
  }
});