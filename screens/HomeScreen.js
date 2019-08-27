import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, Image, ScrollView, TouchableOpacity, ImageBackground} from 'react-native';
import { Container, Content, Card, CardItem, Header, Left, Right, Icon, Title, Body, Row, Button } from 'native-base';


export default class HomeScreen extends Component {
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
        <ScrollView>
          <Text style={{fontSize:25, marginTop: 20, marginBottom: 20, marginLeft: 125}}>Top Recipes</Text>
          
          
          <View style={styles.CardContainer}>
          <TouchableOpacity 
            onPress={() => this.props.navigation.navigate('Dinner')}>

            <Card style={styles.recipeItemCard}>
                <CardItem header>
                  <Text style={styles.recipeCardHead}>World's Best Lasagna</Text>
                </CardItem>

                <CardItem Body>
                  <Image source={{uri: 'https://images.media-allrecipes.com/userphotos/720x405/3359675.jpg'}} style={{height: 200, width: 350, flex: 1, resizeMode: 'cover'}}/>
                    <Text>
                    </Text>
                </CardItem>

                <CardItem footer>
                  <Text>Per Serving: 390 calories; 15.4 g fat; 33.4 g carbohydrates; 33.1 g protein; 81 mg cholesterol; 1129 mg sodium.</Text>
                </CardItem>
            </Card>
          </TouchableOpacity>
          

          <TouchableOpacity 
            onPress={() => this.props.navigation.navigate('Breakfast')}>

            <Card style={styles.recipeItemCard}>
                <CardItem header>
                  <Text style={styles.recipeCardHead}>On-the-Farm Scrambled Eggs</Text>
                </CardItem>

                <CardItem Body>
                  <Image source={{uri: 'https://images.media-allrecipes.com/userphotos/720x405/4521371.jpg'}} style={{height: 200, width: 350, flex: 1, resizeMode: 'cover'}}/>
                    <Text>
                    </Text>
                </CardItem>

                <CardItem footer>
                  <Text>Per Serving: 270 calories; 21.8 g fat; 2.1 g carbohydrates; 16.7 g protein; 404 mg cholesterol; 912 mg sodium.</Text>
                </CardItem>
            </Card>
          </TouchableOpacity>

          <TouchableOpacity 
            onPress={() => this.props.navigation.navigate('Lunch')}>

            <Card style={styles.recipeItemCard}>
                <CardItem header>
                  <Text style={styles.recipeCardHead}>The Best Chicken Fried Steak</Text>
                </CardItem>

                <CardItem Body>
                  <Image source={{uri: 'https://images.media-allrecipes.com/userphotos/720x405/5179074.jpg'}} style={{height: 200, width: 350, flex: 1, resizeMode: 'cover'}}/>
                    <Text>
                    </Text>
                </CardItem>

                <CardItem footer>
                  <Text>Per Serving: 791 calories; 34.3 g fat; 71.1 g carbohydrates; 47 g protein; 124 mg cholesterol; 1393 mg sodium.</Text>
                </CardItem>
            </Card>
          </TouchableOpacity>
          </View>
          

          <Text style={{fontSize:25, marginTop: 20, marginBottom: 20, marginLeft: 125}}>New Recipes</Text>


          <View style={styles.CardContainer}>
          <TouchableOpacity 
            onPress={() => this.props.navigation.navigate('Dinner')}>

              <Card style={styles.recipeItemCard}>
                  <CardItem header>
                    <Text style={styles.recipeCardHead}>World's Best Lasagna</Text>
                  </CardItem>

                  <CardItem Body>
                    <Image source={{uri: 'https://images.media-allrecipes.com/userphotos/720x405/3359675.jpg'}} style={{height: 200, width: 350, flex: 1, resizeMode: 'cover'}}/>
                      <Text>
                      </Text>
                  </CardItem>

                  <CardItem footer>
                    <Text>Per Serving: 390 calories; 15.4 g fat; 33.4 g carbohydrates; 33.1 g protein; 81 mg cholesterol; 1129 mg sodium.</Text>
                  </CardItem>
              </Card>
            </TouchableOpacity>

            <TouchableOpacity 
              onPress={() => this.props.navigation.navigate('Dinner')}>

              <Card style={styles.recipeItemCard}>
                  <CardItem header>
                    <Text style={styles.recipeCardHead}>Grilled Salmon</Text>
                  </CardItem>

                  <CardItem Body>
                    <Image source={{uri: 'https://images.media-allrecipes.com/userphotos/720x405/800839.jpg'}} style={{height: 200, width: 350, flex: 1, resizeMode: 'cover'}}/>
                      <Text>
                      </Text>
                  </CardItem>

                  <CardItem footer>
                    <Text>Per Serving: 318 calories; 20.1 g fat; 13.2 g carbohydrates; 20.5 g protein; 56 mg cholesterol; 1092 mg sodium.</Text>
                  </CardItem>
              </Card>
            </TouchableOpacity>

            <TouchableOpacity 
              onPress={() => this.props.navigation.navigate('Breakfast')}>

              <Card style={styles.recipeItemCard}>
                  <CardItem header>
                    <Text style={styles.recipeCardHead}>Ultimate Tofu Breakfast Burrito Bowls</Text>
                  </CardItem>

                  <CardItem Body>
                    <Image source={{uri: 'https://imagesvc.meredithcorp.io/v3/mm/image?url=https%3A%2F%2Fimages.media-allrecipes.com%2Fuserphotos%2F4306820.jpg&w=595&h=595&c=sc&poi=face&q=85'}} style={{height: 200, width: 350, flex: 1, resizeMode: 'cover'}}/>
                      <Text>
                      </Text>
                  </CardItem>

                  <CardItem footer>
                    <Text>579 calories; 39.6 g total fat; 0 mg cholesterol; 1171 mg sodium. 57.2 g carbohydrates; 22 g protein</Text>
                  </CardItem>
              </Card>
            </TouchableOpacity>

          </View>
        </ScrollView>
        
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
  },
  CardContainer: {
    flexDirection: 'column',
    justifyContent: 'center'
  },
  recipeItemCard: {
    flex: 1,
    backgroundColor: '#fff'
  },
  recipeCardHead: {
    fontSize: 20,
    borderRadius: 20,
    color: '#333'
  }
});

//<Image source={{uri: '../assets/recipeAppLogo.png'}} style={{MarginRight: -100, width: 10, height: 10}} />